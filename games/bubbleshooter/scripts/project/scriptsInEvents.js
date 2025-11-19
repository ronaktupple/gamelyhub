function parseArray(c3ArrayInstance){
	const a = c3ArrayInstance;
	return Array(a.width).fill(0).map((c, x) => {
		return Array(a.height).fill(0).map((d, y) => a.getAt(x, y));
	});
}
var ROW = 0
var ROW_MIN = 0
var COL =0
var data = []
var visited  = []
var result = []
function implementFindConnect(runtime, row, col, type,row_max,row_min){
		let a = runtime.objects.Array_Data.getFirstPickedInstance()
		data = parseArray(a)
		ROW  = row_max
		ROW_MIN = row_min
		COL = data[0].length
		visited = Array.from(Array(ROW), ()=> Array(COL).fill(false));
		result = []
		
		findMatch(row, col, data, visited, result, type)
		
		for(let i = 0; i < result.length; i++){
		 runtime.globalVars.Ball_findConnect += "|" + result[i][0] + "," + result[i][1] + "," 
		}
		
		
		
		
}

function implementFindNonConnect(runtime, row, col, type,row_max,row_min){
		let a = runtime.objects.Array_Data.getFirstPickedInstance()
		data = parseArray(a)
		ROW  = row_max
		ROW_MIN = row_min
		COL = data[0].length
		visited = Array.from(Array(ROW), ()=> Array(COL).fill(false));
		result = []
		findMatch(row, col, data, visited, result, type, 1)
		for(let i = 0; i < result.length; i++){
		 runtime.globalVars.Ball_findNonConnect += "|" + result[i][0] + "," + result[i][1] + "," 
		}
}


function isValid(vis, row, col, type, is_non_connect)
{

    if (row < ROW_MIN || col < 0
        || row >= ROW || col >= COL)
        return false;

	 if(is_non_connect == 0)	
        if(data[row][col] != type)
        	return false
		
	 if(is_non_connect == 1)
	 	if(data[row][col] == 0)
			return false
 
     if (vis[row][col])
        return false;
    return true;
}
 
function findMatch(row, col,grid, vis, result, type, is_non_connect = 0)
{
    var st = [];
    st.push([ row, col ]);
    while (st.length!=0) {
        var curr = st[st.length-1];
        st.pop();
        var row = curr[0];
        var col = curr[1];

        if (!isValid(vis, row, col , type, is_non_connect))
            continue;
            
        vis[row][col] = true;
        result.push([row, col])
        
        if(isValid(vis, row , col + 1, type, is_non_connect))
          st.push([row , col  + 1 ])
        
        if(isValid(vis, row, col - 1, type, is_non_connect))
          st.push([row , col  - 1])

        if(isValid(vis, row + 1, col, type, is_non_connect))  
          st.push([row + 1, col ])

        if(isValid(vis, row - 1, col, type, is_non_connect))
          st.push([row - 1, col ])

        if((row + 1) % 2 == 0){
          if(isValid(vis,  row + 1, col + 1, type, is_non_connect))
            st.push([row + 1, col + 1])

          if(isValid(vis , row - 1, col + 1, type, is_non_connect))
            st.push([row - 1, col + 1])
          
        }
        
        if((row + 1) % 2 == 1){
            if(isValid(vis, row + 1, col - 1, type, is_non_connect))
              st.push([row + 1, col - 1])
        }
        
        if((row - 1) % 2 == 1){
          if(isValid(vis, row - 1, col - 1, type, is_non_connect))
            st.push([row - 1, col - 1])
        }
      
    }
}


const scriptsInEvents = {

	async Ballevent_Event54_Act4(runtime, localVars)
	{
		implementFindNonConnect(runtime, localVars.row, localVars.col, 0, localVars.num_row_max, localVars.num_row_min)
	},

	async Ballevent_Event179_Act1(runtime, localVars)
	{
		
	},

	async Ballevent_Event206_Act22(runtime, localVars)
	{
		implementFindConnect(runtime, localVars.row, localVars.col, localVars.type, localVars.row_max, localVars.row_min)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

