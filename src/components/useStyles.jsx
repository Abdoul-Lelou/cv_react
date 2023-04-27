import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import stylesProfile from '../components/homme.png'
import tel from '../components/phone-call.png'
import email from '../components/email.png'
import clip from '../components/clip.png'
import map from '../components/map.png';
import experience from '../components/experience.png';
import education from '../components/education.png';
import user from '../components/user.png';



const drawerWidth = 350;


const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
   
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgb(55, 160, 213)',
    color:'white',
    marginLeft: '50px'

  },
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
         
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
              <img src={stylesProfile} alt="Avatar" style={{verticalAlign: 'middle', marginTop: '3px', marginLeft: '80px'}} width={160}/><br/>
              
                <div className='row   m-0 ' style={{width:'90%', color:'whitesmoke',marginLeft:'-35px'}}>
                <span style={{fontSize:'25px', fontWeight:'bold',width:'90%', margin:'-10px',marginLeft:'63px', padding:'-20px', paddingBottom:'10px'}}>Abdourahmane Diallo</span>
                <span style={{fontSize:'15px', fontWeight:'revert', marginLeft:'-35px'}}>Designation</span>
                </div>
              
              
              <div className={classes.toolbar} />
              {/* <Divider /> */}
                {/* <Divider /> */}
                <List style={{marginLeft:'25px',marginTop:'-50px', padding:'0px', border:'black'}}>

                    <ListItem button style={{marginTop:'-5px', padding:'0px', border:'black'}}>
                      <ListItemIcon>
                      <img src={tel} alt="" srcset=""  width={30}/>
                      </ListItemIcon>
                      {/* <ListItemText primary={text} style={{borderTop:'seagreen 1px solid',marginLeft:'-15px', padding:'10px'}}/>*/}
                       <span style={{borderTop:'yellowgreen 1px solid', width:'100%'}}>
                        
                         <p style={{fontSize:'15px', fontWeight:'revert', paddingTop:'13px'}}>+221778945587 <br />
                            <i style={{fontWeight:'lighter'}}>Mobile</i> 
                         </p>
                       </span>
                    </ListItem>

                    <ListItem button style={{marginTop:'-5px', padding:'0px', border:'black'}}>
                      <ListItemIcon>
                      <img src={email} alt="" srcset=""  width={30}/>
                      </ListItemIcon>
                      {/* <ListItemText primary={text} style={{borderTop:'seagreen 1px solid',marginLeft:'-15px', padding:'10px'}}/> */}

                      <span style={{borderTop:'yellowgreen 1px solid', width:'100%'}}>
                     
                        
                         <p style={{fontSize:'15px', fontWeight:'revert' , paddingTop:'13px'}}>abdoul@gmail.com <br />
                            <i style={{fontWeight:'lighter'}}>Personal</i> 
                         </p>
                       </span>
                    </ListItem>

                    <ListItem button style={{marginTop:'-5px', padding:'0px', border:'black'}}>
                      <ListItemIcon>
                      <img src={map} alt="" srcset=""  width={30}/>
                      </ListItemIcon>
                      {/* <ListItemText primary={text} style={{borderTop:'seagreen 1px solid',marginLeft:'-15px', padding:'10px'}}/> */}

                      <span style={{borderTop:'yellowgreen 1px solid', width:'100%'}}>
                     

                          <p style={{fontSize:'15px', fontWeight:'revert', paddingTop:'13px'}}>Hlm 1, Medina <br /> Dakar,Senegal <br/>
                            <i style={{fontWeight:'lighter'}}>Home</i> 
                         </p> 
                       </span>
                    </ListItem>

                    <ListItem button style={{marginTop:'-5px', padding:'0px', border:'black'}}>
                      <ListItemIcon>
                      <img src={clip} alt="" srcset=""  width={30}/>
                      </ListItemIcon>
                      {/* <ListItemText primary={text} style={{borderTop:'seagreen 1px solid',marginLeft:'-15px', padding:'10px'}}/> */}
                      <span style={{borderTop:'yellowgreen 1px solid', width:'100%', marginBottom:'20px'}}>
                        
                         <p style={{fontSize:'15px', fontWeight:'revert', paddingTop:'13px'}}>Technical Skills <br/>
                             
                         </p> 
                       </span>
                    </ListItem>
                    
                    <div className='col-4' style={{marginLeft:'70px'}}>
                        <label htmlFor="" className='row'>HTML5,CSS3,jQuery</label>
                        <input type="range" name="range"color="white" className='row mb-0' onLoadStart='hello' style={{marginRight:'50px'}}/>
                      
                          <span></span><span></span><span></span>

                        <label htmlFor="" className='row'>Angular 5</label>
                    </div>
                  
                </List>
          </Drawer>


          {/* <main className={classes.content}> */}
            <div className='container-fluid border w-100 bg' >
            <Typography paragraph >
                <div className='row row-cols-2' style={{marginLeft:'8rem', height:'120%'}}>
                    <i className=" d-flex  shadow bg-light mt-2 border" style={{ height:'180%', width:'70%'}}>
                        <div className='col-2 bdLeft'>
                          <i class="fa fa-address-book " aria-hidden="true"> 
                            <img src={user} alt="" srcset="" width={30} className='pt-2'/>
                          </i>
                        </div>
                        <div className='col pt-2 ' style={{marginLeft:'7px'}}>
                      
                            <h4 align='left' className='mb-2'>About</h4>
                            <p align='left' className='text'>
                              Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing ad elit. 
                              Rerum porro commodi distinctio ad cumque pariatur, illo at cum vitae sie  elitomu quibusdam unde
                              neque perferendis nobis ab est quae blanditiis molestiaere silo. Voluptatibus! amet consectetur 
                              adipisicing elit. Eum voluptatem non  ullametumo quisquam. amet consectetur adipisicing elit.
                              Eum voluptatem non  accusantiumir quisquam. Quibusdam natus magnam quasi in illum temporibus,
                              blanditiisai mo ducimus quos maiores! Temporibus natus voluptas nesciunt.
                              Lorem, ipsum dolo sit amet consectetur adipisicing elit. Officia nihil magnam delectus fugiat dolor accusantium porro,
                              saepe nisi possimus sed repellendus, repellat modi! Amet, magni cupiditate. Fugit illo expedita minus?</p>
                        
                        </div>  
                    </i>
                </div>
            </Typography>
            <Typography paragraph >
              
                <div className='row row-cols-2' style={{marginLeft:'8rem', height:'120%'}}>
                    <i className=" d-flex  shadow bg-light mt-2" style={{ height:'180%', width:'70%'}}>
                        <div className='col-2 bdLeft'>
                          <i class="fa fa-address-book " aria-hidden="true"> 
                            <img src={experience} alt="" srcset="" width={30} className='pt-2'/>
                          </i>
                        </div>
                        <div className='col pt-2' style={{marginLeft:'7px'}}>
                      
                        <h4 align='left' className='mb-2'>Work Experience</h4>
                          <h6 align='left'>Designation at Compagny Name</h6>
                          <h6 className='text-primary'  align='left'>Apr 2015-Now 2017</h6>
                         
                          <p align='left' className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem non  ullam quisquam.met consectetur adipisicing consectetur adipisicing  ullam si.</p>
                          <hr />
                          <h6 align='left'>Designation at Compagny Name</h6>
                          <h6 className='text-primary'  align='left'>Apr 2015-Now 2017</h6>
                          <p align='left' className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem non  ullam quisquam.met consectetur adipisicing consectetur adipisicing  ullam si.</p>
                          <hr />
                        </div>  
                    </i>
                </div>
            </Typography>

            <Typography paragraph>
            

              <div className='row row-cols-2' style={{marginLeft:'8rem', height:'120%'}}>
                    <i className=" d-flex  shadow bg-light mt-2" style={{ height:'180%', width:'70%'}}>
                        <div className='col-2 bdLeft'>
                          <i class="fa fa-address-book " aria-hidden="true"> 
                            <img src={education} alt="" srcset="" width={30} className='pt-2'/>
                          </i>
                        </div>
                        <div className='col pt-2' style={{marginLeft:'7px'}}>
                      
                        <h4 align='left' className='mb-2'>Education</h4>
                          <h6 align='left'>Designation at Compagny Name</h6>
                          <h6 className='text-primary'  align='left'>Apr 2015-Now 2017</h6>
                          <p align='left' className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem non  ullam quisquam.met consectetur adipisicing consectetur adipisicing  ullam si.</p>
                          
                          <hr />
                          <h6 align='left'>Designation at Compagny Name</h6>
                          <h6 className='text-primary'  align='left'>Apr 2015-Now 2017</h6>
                          <p align='left' className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem non  ullam quisquam.met consectetur adipisicing consectetur adipisicing  ullam si.</p>
                          <hr/>
                        </div>  
                    </i>
                </div>
            </Typography>

            </div>
          {/* </main> */}
    </div>
  );
}

