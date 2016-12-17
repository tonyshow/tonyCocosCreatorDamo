#coding:utf-8 
import time
import codecs
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import os
import glob
import xlrd
import re 
import codecs
import json
dir='./in'			#Դ�ļ��洢Ŀ¼
outPath='./out/' 	#Ŀ���ļ��洢Ŀ¼
dataTypeLine = 1    #����������
indexLine = 2		#������������
fileNameList=[];	#存储所以文件的名字
jsonConfig=json.loads('{"Compose":{"uid":"needRoleQuality","conformityDatas":"newRoleId,rate"}}');
jsFileBf = 'Plan'
#===================================================================================================
def isNumber(str):
	try:
		v = float(str);
		return True;
	except ValueError:
		return False;

#===================================================================================================		
def GetLineData( dataList ):
	temp_ss = '['
	num=0;
	for key,value in dataList.items():		 
		if(isNumber(value)==False):
			value='"'+value+'"'; 
		if(num==0):
			temp_ss+=value;
		else:
			temp_ss+=(','+value);
		num+=1;	
		
		
	temp_ss += ']'  
	return temp_ss;

#===================================================================================================	
def delete_file_folder(src): 
    if os.path.isfile(src):  
        try:  
            os.remove(src)  
        except:  
            pass 
    elif os.path.isdir(src):  
        for item in os.listdir(src):  
            itemsrc=os.path.join(src,item)  
            delete_file_folder(itemsrc)  
        try:  
            os.rmdir(src)  
        except:  
            pass 	

#===================================================================================================		
def removeFileInFirstDir(targetDir): 
	for file in os.listdir(targetDir): 
		targetFile = os.path.join(targetDir,  file)
		if os.path.isfile(targetFile):
			os.remove(targetFile)
		else:
			delete_file_folder(targetFile)



#===================================================================================================
#����txt�ļ�	
#paths 		ԭ�ļ�·��    		 in\Custom.xlsx
#name		�ļ�����			 Custom
#outPath	�����ļ���·��      ./out/
def createNewJson(paths, name, outPath): 
	print'\ncreateNewJson : read xlsx file : %s'%paths 
	wb = xlrd.open_workbook(paths)	 
	sheetNumber = 0; 
	for sheetName in wb.sheet_names(): 
		sheetNumber = sheetNumber + 1;
		if( sheetNumber == 1):  
			name = sheetName;
			fullTxtPath = outPath + '\\' + name + '.json';
			txtFile = open(fullTxtPath, 'wb+')
			txtFile.read().decode("utf-8")
			print'create json file : %s' % name + '.json'
			txtFile.write('[')
			sheet = wb.sheet_by_name(sheetName)
			ncols = sheet.ncols
			print 'createJson row cnt = %s'%sheet.nrows
			 
			
			#�����ظ����ֶ���
			uid=jsonConfig[sheetName]['uid'];
			#������Ϊ�ֶ�
			conformityDatas=jsonConfig[sheetName]['conformityDatas'];
			
			conformityDatasTemp = conformityDatas.split(",");
			
			conformityDatasDic = {};
			for conformity in conformityDatasTemp:					
				conformityDatasDic[str(conformity)] = 1;					
							
			#����������
			xlsx_ncols = sheet.ncols;				
			#����������
			xlsx_nrows = sheet.nrows;
			
			
			#Ψһid������
			uIdCols=0
			tempCurrUid="-1";
			currLineUid = "-1";
			#�����ӵ�һ���ֶε��������ֵ�
			addToOneColsDic={};
					
			addOldDataList = {};
			#��������
			addDataList={}; 
			 
			getLine = 0;
			#��ѭ������
			for rownum in range(sheet.nrows):
				colDelimiter=','
				rowDelimiter=','
				dataStr="["									 
				isLastRowLine =  int(xlsx_nrows -1 ) == int(rownum);	
							
				for ncol in range( sheet.ncols ):					
					getCurrValue = sheet.cell(rownum, ncol).value;	
					v1	= sheet.cell(rownum, ncol).value;	
					if (type(v1) == float):     
						v1 = str(v1)
						v1 = re.sub('\.0*$', "", v1)
					if not isNumber(v1.strip()):
						v1 = '\"%s\"'%v1
					
					isLastNcol = (int(xlsx_ncols-1) == int(ncol) );
					#---------------------------------------------------------------------
					if( 0 == int(rownum) or 2 == int(rownum) ):											
						if( 2 == int(rownum) ):
							#���ظ�id������
							if(uid==getCurrValue):
								uIdCols=int(ncol);								
							isHave = conformityDatasDic.get(getCurrValue,False);
							if( False == isHave ):
								addToOneColsDic[str(ncol)]='noHave';
							if(uid==getCurrValue):
								uIdCols=int(ncol);
						#��rownum�е�������
						if(True == isLastNcol):
							v1+=']'							
							if( False==isLastRowLine ):
								v1+=rowDelimiter;
								#����
								v1+='\n'
							dataStr+=v1;
							txtFile.write(dataStr)
						else:
							v1+=colDelimiter;
							dataStr+=v1; 
								
					#�����κδ���		
					elif(1 == int(rownum)):
						pass
					else:
					#��ʽ����������
						#Ψһid
						currLineUid=sheet.cell(rownum, uIdCols).value; 						
						#��Ҫ����
						if( 'noHave' != addToOneColsDic.get(str(ncol) , False) ):
							if( False==addDataList.has_key(ncol) ):
								addDataList[ncol]= str(v1); 
							else:
								oldValue = addDataList.get(ncol,'');
								addDataList[ncol]= oldValue +"#"+str(v1);
						#������
						else:
							addDataList[ncol]=str(v1);										
					#----------------------------------------------------------------------
				if(int(rownum)>=3): 														
					if(isLastRowLine==True): 
						txtFile.write(GetLineData(addDataList));
					else:
						nextLineUid = sheet.cell( rownum+1, uIdCols).value;
						if(nextLineUid!=currLineUid):
							txtFile.write( GetLineData(addDataList) );
							txtFile.write( ',\n' );
							addDataList={};
					
			txtFile.write(']')
			txtFile.close()

#===================================================================================================
def doNextLine( strData ):
	return (strData+'\n\n');
def doNextOneLine( strData ):
	return (strData+'\n');
#===================================================================================================
def DelLastChar(str):
    str_list=list(str)
    str_list.pop()
    return "".join(str_list)

#===================================================================================================	
#获取json数据
def getAllJson( wb,sheetName ):
	tmp = '[';
	sheet = wb.sheet_by_name(sheetName);
	for rownum in range(sheet.nrows):
		if(int(rownum)>2):
			tmp+='['	
			for ncol in range( sheet.ncols ):		
				getCurrValue = sheet.cell(rownum, ncol).value;  
				if (type(getCurrValue) == float):     
					getCurrValue = str(getCurrValue)
					getCurrValue = re.sub('\.0*$', "", getCurrValue)
				if not isNumber(getCurrValue.strip()):
					getCurrValue = '\"%s\"'%getCurrValue  
				tmp+= getCurrValue+',' 
			tmp = DelLastChar(tmp);
			tmp+='],'

	tmp = DelLastChar(tmp);
	tmp+=']'
	return tmp;

#===================================================================================================	
#获取字段索引 : 'id':0,'group':1,'openingTime':2
def getIndexNames( wb,sheetName ):
	tmp = '{';
	sheet = wb.sheet_by_name(sheetName);
	for rownum in range(sheet.nrows):
		if(2==int(rownum)):
			for ncol in range( sheet.ncols ):		
				getCurrValue = sheet.cell(rownum, ncol).value;  	
				tmp+= '"{0}":{1},'.format(getCurrValue,ncol); 
	tmp = DelLastChar(tmp);
	tmp+='}'
	return tmp;

#===================================================================================================
#keyPos: 唯一key所在列
def getRowIndex( wb,sheetName , keyPos ):
	tmp = '{';
	sheet = wb.sheet_by_name(sheetName);
	for rownum in range(sheet.nrows):
		if(int(rownum)>2): 	
			getCurrValue = sheet.cell(rownum, keyPos).value;

			if (type(getCurrValue) == float):     
				getCurrValue = str(getCurrValue)
				getCurrValue = re.sub('\.0*$', "", getCurrValue)
			if not isNumber(getCurrValue.strip()):
				getCurrValue = '\"%s\"'%getCurrValue 
				tmp+= '{0}:{1},'.format(getCurrValue,int(rownum)-3 );
			else:
				tmp+= '"{0}":{1},'.format(getCurrValue,int(rownum)-3 );

			 
	tmp = DelLastChar(tmp);
	tmp+='}'
	return tmp;

#===================================================================================================
#配置json文件 主要是用于指定唯一key
def loadConfig():
    with open('config.json') as json_file:
        data = json.load(json_file)
        return data

def createIfOrelif( txtFile,ifOrElif,name ):
	txtFile.write('	{0}("{1}"==name)'.format(ifOrElif,name) );
	txtFile.write( doNextOneLine('{'));
	txtFile.write( doNextOneLine("		var {0} = require('./../../MgData/PlanData/{1}');".format(name,name)));
	txtFile.write( doNextOneLine('		return new {0}();'.format(name)));
	txtFile.write( doNextOneLine('	}'));

#===================================================================================================
#创建get方法
def createGetFunction(txtFile, nameListJson , uKey ):	 
	for key in json.loads(nameListJson): 
		Key = key.capitalize();
		strtmp = 'pro.get{0} = function(id)'.format(Key);
		txtFile.write( doNextOneLine( strtmp ));
		txtFile.write( doNextOneLine( '{' ));
		txtFile.write( doNextOneLine( '	var data = this.findById(id);' ));
		strtmp = '	return data.{0}'.format(key);
		txtFile.write( doNextOneLine( strtmp ));
		txtFile.write( doNextOneLine( '};' ));
		 
def createGameWorldFunction( txtFile ):
	txtFile.write( doNextOneLine( "pro.getWorld = function( id ){" ) );
	txtFile.write( doNextOneLine( "	var language = PlanApi.PlanGameConfig.getValue('language');" ) );
	txtFile.write( doNextOneLine( "	var row = this.findRowById(id);" )  );
	txtFile.write( doNextOneLine( "	var ncol = this.indexNames[language+'_world'];" )  );	
	txtFile.write( doNextOneLine( "	var data = this.rowDataByRow(row);" ) );
	txtFile.write( doNextOneLine( "	return data[ncol];" ) );
	txtFile.write( doNextLine( "};" ) );

#===================================================================================================	
#创建dataApi.js文件 
def create_dataApi():
	#头文件部分
	fullTxtPath = outPath + '\\{0}Api.js'.format(jsFileBf); 
	txtFile = open(fullTxtPath, 'wb+')
	txtFile.read().decode("utf-8") 
	txtFile.write( '/**\n');
	txtFile.write( '* 本地数据管理\n');
	txtFile.write( '*/\n');
	txtFile.write( doNextLine('var exp = module.exports = {};'));
	txtFile.write( doNextLine('var modules = exp.modules = {};'));
	tmpNames = 'var names ={0};'.format(fileNameList);
	tmpNames = tmpNames.replace('u', '')
	txtFile.write( doNextLine( tmpNames )); 
	txtFile.write( doNextOneLine('function create( name ){'));
	allFileNum = len(fileNameList); 
	for i in range(0,allFileNum):
		name = fileNameList[i];
		 
		#第一个
		if( i == 0 ):
			createIfOrelif(txtFile,'if',name);
		elif( i > 0 and i < int(allFileNum-1)):
			createIfOrelif(txtFile,'else if',name);
		else:
			createIfOrelif(txtFile,'else if',name);
			pass
	txtFile.write( doNextOneLine('}'));			
	  
	txtFile.write( doNextOneLine('function doman(){   '));
	txtFile.write( '    for(var i = 0 ; i < {0} ; ++i )'.format(allFileNum));
	txtFile.write( doNextOneLine('{')); 
	txtFile.write( doNextOneLine('        var name = names[i];'));
	txtFile.write( doNextOneLine('        Object.defineProperty(exp, name, {'));
	txtFile.write( doNextOneLine('            get: (function (name) {'));
	txtFile.write( doNextOneLine('                var mod = modules[name];'));
	txtFile.write( doNextOneLine('                return function () {'));
	txtFile.write( doNextOneLine('                {'));
	txtFile.write( doNextOneLine('                    mod = modules[name] = create( name );'));
	txtFile.write( doNextOneLine('                }'));
	txtFile.write( doNextOneLine('                return mod;'));
	txtFile.write( doNextOneLine('            }'));
	txtFile.write( doNextOneLine('            })(name)'));
	txtFile.write( doNextOneLine('        });'));
	txtFile.write( doNextOneLine('    } '));
	txtFile.write( doNextOneLine('}'));
	txtFile.write( doNextOneLine('doman();'));
	txtFile.write( doNextOneLine('window.{0}Api = exp;'.format(jsFileBf)));
 
		 
#===================================================================================================	
#src 			: elsx 所在的相对路径	 ( ./in/H活动-领体力.xlsx )
#chinesName		：elsx 文件名字			 ( H活动-领体力 )
#dst			: 文件输出位置			 ( .\out )
def createJsFile(src , chinesName , dst ): 	

	allWb = xlrd.open_workbook(src);
	 
	 
	DataName = allWb.sheet_names()[0];   
	
	config = loadConfig();
	uKey =  config[DataName]['key'];

	if(config.get(DataName,False) == False ):
		return;
 
	nameListJson = getIndexNames(allWb,DataName);

	#-------------------------------------------------------------
	#创建文件
	fullTxtPath = outPath + '\\' +jsFileBf+ DataName + '.js';
	txtFile = open(fullTxtPath, 'wb+')
	txtFile.read().decode("utf-8")
	
	#添加require文件
	txtFile.write( "var {0}Base = require('./../../FrameWork/Utils/{1}Base'),\n".format(jsFileBf,jsFileBf) );
	txtFile.write( "util = require('util');\n\n" );
	  
	className = jsFileBf + DataName;

	print'chinesName = %s' %( chinesName );
	print'className  = %s\n' %( className );

	fileNameList.append( className );
	tmpStr = 'var {0} = function () '.format(className);
	txtFile.write(tmpStr);
	txtFile.write('{\n\n');
	
	#(1) 数据
	tmp = getAllJson(allWb , DataName);
	tmpStr = '	var data = {0};'.format(tmp);
	txtFile.write(doNextLine(tmpStr));
	
	#(2) key索引生成 
	tmp = getRowIndex( allWb , DataName , json.loads(nameListJson)[uKey] );
	tmpStr = '	var indexs = {0};'.format(tmp);
	txtFile.write(doNextLine(tmpStr));
	
	#(3) 字段名
	tmpStr = '	var indexNames = {0};'.format(nameListJson);
	txtFile.write(doNextLine(tmpStr));
	
	tmpStr = '	{0}Base.call( this, data , indexs , indexNames );'.format(jsFileBf);
	txtFile.write(doNextLine(tmpStr));
	
	tmpStr = '};';
	txtFile.write(doNextLine(tmpStr));
	
	tmpStr = 'util.inherits( {0}, {1}Base );'.format(className,jsFileBf);
	txtFile.write(doNextLine(tmpStr));
			
	tmpStr = 'var pro = {0}.prototype;'.format(className);
	txtFile.write(doNextLine(tmpStr));
	
	if( 'PlanGameWorld' == className ):
		createGameWorldFunction(txtFile);
	else: 
		createGetFunction(txtFile,nameListJson,uKey);

	tmpStr = 'module.exports = {0};'.format(className);
	txtFile.write(doNextLine(tmpStr));	
	txtFile.close();


#===================================================================================================	
def file_folder(src, dst):  
	
	if os.path.isfile(src):  
		try:	
			outFilePath = src
			outFilePath = outFilePath.replace('\\','/') 
			src = src.replace('\\','/')  
			listFolder = outFilePath.split("/")
			length = len(listFolder)-1;
			fileName_xlsx = listFolder[length]; 
			fileName = (fileName_xlsx.split("."))[0];
			#create_dataApi( fileName); 
			createJsFile(  src, fileName, dst  );				
		except:
			pass
	elif os.path.isdir(src): 
		for item in os.listdir(src):
			itemsrc=os.path.join(src,item)
			file_folder(itemsrc, dst)		
	
#===================================================================================================
def main(): 
	if len(sys.argv) < 3:
		print 'lack of arg'
		return
	dir = sys.argv[1]
	outPath = sys.argv[2]
	
	if  (os.path.exists(dir)):
		sjdghg = ''
	else:
		os.mkdir( dir )
		
	if  (os.path.exists(outPath)):
		sjdghg = ''
	else:
		os.mkdir( outPath ) 
	removeFileInFirstDir(outPath) 
	file_folder(dir, outPath);
	create_dataApi();
if __name__ == '__main__':
	main()