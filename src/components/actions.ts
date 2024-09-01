"use server";

import { aw } from "@upstash/redis/zmscore-uDFFyCiZ";
// server action to allow configuration of LLM from .env.local

import dotenv from "dotenv";
import { parse } from "path";

import fs from 'fs';
import path from 'path';

export async function getCompanions() {
  
  const COMPFILE = "./companions/companions.json";

  var companions = [];
  // console.log("Loading companion descriptions from "+COMPFILE);
  
  //var fs = require('fs');
  
  
  
  //const data = fs.readFileSync(COMPFILE);


  const usersPath = path.join(process.cwd(), COMPFILE);
  const  data = fs.readFileSync(usersPath, 'utf8');


  console.log(String(data));


  // run a parse here to force a server side error if the JSON is improperly formatted
  // It's much more difficult to debug client side

  var js = JSON.parse(String(data));

  
  return String(data);
}