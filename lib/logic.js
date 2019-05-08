import uuid4  from "/lib/utils/uuid4"

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {ba_academy.models.transactions.MintMarks} tx
 * @transaction
 */
function mintMarks(tx) {

  const student = tx.student
  const subject = tx.subject
  const amount = tx.amount 

  const subjectIndex = student.subjectIds.indexOf( subject.code )
  if( subjectIndex === -1 )  throw new Error('[ custom error ] mintMarks error. Do not found Index. Wrong Subject code');
  if( amount >= 40 )  throw new Error('[ custom error ] mintMarks error. Amount so big');

  return getParticipantRegistry("ba_academy.models.participants.Student")
    .then((registry) => {
      student.marks[subjectIndex] += amount
      registry.update(student);
    })
    .then(() => {
      return getFactory().newEvent(
        "ba_academy.models.transactions",
        "MarksMinted"
      );
    })
    .then(event => {
      event.student = student;
      event.subject = subject;
      event.amount = student.marks[subjectIndex]
      emit(event);
    }) 
}


/**
 * Sample transaction
 * @param {ba_academy.models.transactions.TransferMarks} tx
 * @transaction
 */
function TransferMarks(tx) {

  const student = tx.student
  const subject = tx.subject
  const amount = tx.amount 

  const currentParticipant = getCurrentParticipant();

  const subjectIndexSender = currentParticipant.subjectIds.indexOf( subject.code )
  const subjectIndexRecipient = student.subjectIds.indexOf( subject.code )

  const senderTotalAmount = currentParticipant.marks[subjectIndexSender] - amount
  const recipientTotalAmount = student.marks[subjectIndexRecipient] + amount

  if( subjectIndex === -1 )  throw new Error('[ custom error ] TransferMarks error. Do not found Index. Wrong Subject code');
  if( amount >= 10 )  throw new Error('[ custom error ] TransferMarks error. Amount so big');
  if( senderTotalAmount  <= recipientTotalAmount){
    throw new Error('[ custom error ] Attemt to over marks error. Amount not enough');
  }  

  return getParticipantRegistry("ba_academy.models.participants.Student")
    .then((registry) => {
      currentParticipant.marks[subjectIndexSender] = senderTotalAmount
      student.marks[subjectIndexRecipient] = recipientTotalAmount
      
      registry.update(student);
      registry.update(currentParticipant);
    })
    .then(() => {
      return getFactory().newEvent(
        "ba_academy.models.transactions",
        "MarksTransfered"
      );
    })
    .then(event => {

      event.subject = subject;
      event.amount = amount;

      event.studentSender = currentParticipant;
      event.studentRecipient = student;
      emit(event);
    }) 
}

/**
 * Sample transaction
 * @param {ba_academy.models.transactions.UpdateSubject} tx
 * @transaction
 */

function UpdateSubject(tx) {

  const subject = tx.subject
  const name = tx.name
  const code = tx.code 
  const detail = tx.detail 
  const teacher = tx.teacher 
  const studentIds = tx.studentIds 

  return getParticipantRegistry("ba_academy.models.participants.Student")
    .then((registry) => {
      currentParticipant.marks[subjectIndexSender] = senderTotalAmount
      student.marks[subjectIndexRecipient] = recipientTotalAmount
      
      registry.update(student);
      registry.update(currentParticipant);
    })
    .then(() => {
      return getFactory().newEvent(
        "ba_academy.models.transactions",
        "SubjectUpdated"
      );
    })
    .then(event => {

      event.subject = subject;
      event.name = name;
      event.code = code;
      event.detail = detail;
      event.teacher = teacher;
      event.studentIds = studentIds;
      emit(event);
    }) 
}