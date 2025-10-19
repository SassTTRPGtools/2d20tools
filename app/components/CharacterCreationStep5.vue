<template>
  <div class="character-creation-step">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-amber-800 mb-2">🎨 最終修飾</h2>
      <p class="text-gray-600 text-lg">
        完善你的角色，計算最終數值，並為角色賦予生命。
      </p>
    </div>

    <!-- 各步驟詳細分析 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📋 各步驟詳細分析</h3>
      
      <div class="space-y-6">
        <!-- 步驟1：原型 -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">🎭</span>
            <h4 class="text-lg font-bold text-blue-600">步驟1：原型</h4>
            <span v-if="characterCreationState.selectedArchetype" class="text-green-600 font-bold">✓</span>
            <span v-else class="text-red-600 font-bold">✗ 未選擇</span>
          </div>
          <div v-if="characterCreationState.selectedArchetype" class="space-y-3">
            <div class="bg-blue-50 p-3 rounded-lg">
              <span class="font-bold text-blue-800">{{ characterCreationState.selectedArchetype.name }}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的天賦</div>
                <div class="font-bold text-green-800">{{ archetypeContribution.talents.length }} 個</div>
                <div v-if="archetypeContribution.talents.length > 0" class="text-xs text-green-600 mt-1">
                  {{ archetypeContribution.talents.join('、') }}
                </div>
              </div>
              <div class="bg-amber-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的專精</div>
                <div class="font-bold text-amber-800">{{ archetypeContribution.focuses.length }} 個</div>
                <div v-if="archetypeContribution.focuses.length > 0" class="text-xs text-amber-600 mt-1">
                  {{ archetypeContribution.focuses.join('、') }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-red-600 bg-red-50 p-3 rounded-lg">
            ⚠️ 請回到步驟1選擇原型
          </div>
        </div>

        <!-- 步驟2：國籍 -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">🌍</span>
            <h4 class="text-lg font-bold text-purple-600">步驟2：國籍</h4>
            <span v-if="characterCreationState.selectedNationality" class="text-green-600 font-bold">✓</span>
            <span v-else class="text-red-600 font-bold">✗ 未選擇</span>
          </div>
          <div v-if="characterCreationState.selectedNationality" class="space-y-3">
            <div class="bg-purple-50 p-3 rounded-lg">
              <span class="font-bold text-purple-800">{{ characterCreationState.selectedNationality.name }}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的真理</div>
                <div class="font-bold text-green-800">{{ nationalityContribution.truths.length }} 個</div>
                <div v-if="nationalityContribution.truths.length > 0" class="text-xs text-green-600 mt-1">
                  {{ nationalityContribution.truths.join('、') }}
                </div>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">屬性加值</div>
                <div class="font-bold text-blue-800">{{ nationalityContribution.attributes.length }} 項</div>
                <div v-if="nationalityContribution.attributes.length > 0" class="text-xs text-blue-600 mt-1">
                  {{ nationalityContribution.attributes.join('、') }}
                </div>
              </div>
              <div class="bg-orange-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">技能加值</div>
                <div class="font-bold text-orange-800">{{ nationalityContribution.skills.length }} 項</div>
                <div v-if="nationalityContribution.skills.length > 0" class="text-xs text-orange-600 mt-1">
                  {{ nationalityContribution.skills.join('、') }}
                </div>
              </div>
              <div class="bg-pink-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">語言</div>
                <div class="font-bold text-pink-800">{{ nationalityContribution.languages.length }} 種</div>
                <div v-if="nationalityContribution.languages.length > 0" class="text-xs text-pink-600 mt-1">
                  {{ nationalityContribution.languages.join('、') }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-red-600 bg-red-50 p-3 rounded-lg">
            ⚠️ 請回到步驟2選擇國籍
          </div>
        </div>

        <!-- 步驟3：背景 -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">🎒</span>
            <h4 class="text-lg font-bold text-indigo-600">步驟3：背景</h4>
            <span v-if="characterCreationState.selectedBackground" class="text-green-600 font-bold">✓</span>
            <span v-else class="text-red-600 font-bold">✗ 未選擇</span>
          </div>
          <div v-if="characterCreationState.selectedBackground" class="space-y-3">
            <div class="bg-indigo-50 p-3 rounded-lg">
              <span class="font-bold text-indigo-800">{{ characterCreationState.selectedBackground.name }}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的真理</div>
                <div class="font-bold text-green-800">{{ backgroundContribution.truths.length }} 個</div>
                <div v-if="backgroundContribution.truths.length > 0" class="text-xs text-green-600 mt-1">
                  {{ backgroundContribution.truths.join('、') }}
                </div>
              </div>
              <div class="bg-amber-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的專精</div>
                <div class="font-bold text-amber-800">{{ backgroundContribution.focuses.length }} 個</div>
                <div v-if="backgroundContribution.focuses.length > 0" class="text-xs text-amber-600 mt-1">
                  {{ backgroundContribution.focuses.join('、') }}
                </div>
              </div>
              <div class="bg-pink-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的天賦</div>
                <div class="font-bold text-pink-800">{{ backgroundContribution.talents.length }} 個</div>
                <div v-if="backgroundContribution.talents.length > 0" class="text-xs text-pink-600 mt-1">
                  {{ backgroundContribution.talents.join('、') }}
                </div>
              </div>
              <div class="bg-cyan-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">額外選擇</div>
                <div class="font-bold text-cyan-800">
                  {{ (backgroundContribution.attributes.length + backgroundContribution.skills.length) }} 項
                </div>
                <div v-if="backgroundContribution.attributes.length > 0 || backgroundContribution.skills.length > 0" class="text-xs text-cyan-600 mt-1">
                  {{ [...backgroundContribution.attributes, ...backgroundContribution.skills].join('、') }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-red-600 bg-red-50 p-3 rounded-lg">
            ⚠️ 請回到步驟3選擇背景
          </div>
        </div>

        <!-- 步驟4：特徵 -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">⭐</span>
            <h4 class="text-lg font-bold text-teal-600">步驟4：特徵</h4>
            <span v-if="characterCreationState.selectedTrait" class="text-green-600 font-bold">✓</span>
            <span v-else class="text-red-600 font-bold">✗ 未選擇</span>
          </div>
          <div v-if="characterCreationState.selectedTrait" class="space-y-3">
            <div class="bg-teal-50 p-3 rounded-lg">
              <span class="font-bold text-teal-800">{{ characterCreationState.selectedTrait.name }}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的真理</div>
                <div class="font-bold text-green-800">{{ traitContribution.truths.length }} 個</div>
                <div v-if="traitContribution.truths.length > 0" class="text-xs text-green-600 mt-1">
                  {{ traitContribution.truths.join('、') }}
                </div>
              </div>
              <div class="bg-amber-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的專精</div>
                <div class="font-bold text-amber-800">{{ traitContribution.focuses.length }} 個</div>
                <div v-if="traitContribution.focuses.length > 0" class="text-xs text-amber-600 mt-1">
                  {{ traitContribution.focuses.join('、') }}
                </div>
              </div>
              <div class="bg-pink-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">提供的天賦</div>
                <div class="font-bold text-pink-800">{{ traitContribution.talents.length }} 個</div>
                <div v-if="traitContribution.talents.length > 0" class="text-xs text-pink-600 mt-1">
                  {{ traitContribution.talents.join('、') }}
                </div>
              </div>
              <div class="bg-cyan-50 p-3 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">額外選擇</div>
                <div class="font-bold text-cyan-800">
                  {{ (traitContribution.attributes.length + traitContribution.skills.length) }} 項
                </div>
                <div v-if="traitContribution.attributes.length > 0 || traitContribution.skills.length > 0" class="text-xs text-cyan-600 mt-1">
                  {{ [...traitContribution.attributes, ...traitContribution.skills].join('、') }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-red-600 bg-red-50 p-3 rounded-lg">
            ⚠️ 請回到步驟4選擇特徵
          </div>
        </div>
      </div>
    </div>

    <!-- 數值檢查區域 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📊 最終數值檢查</h3>
      
      <!-- 步驟完成狀態概覽 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 各步驟完成狀態 -->
        <div :class="characterCreationState.selectedArchetype ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-3 rounded-lg border-2">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm font-medium">步驟1：原型</span>
            <span :class="characterCreationState.selectedArchetype ? 'text-green-500' : 'text-red-500'">
              {{ characterCreationState.selectedArchetype ? '✓' : '✗' }}
            </span>
          </div>
          <div class="text-xs text-gray-600">
            {{ characterCreationState.selectedArchetype ? characterCreationState.selectedArchetype.name : '未選擇原型' }}
          </div>
        </div>
        
        <div :class="characterCreationState.selectedNationality ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-3 rounded-lg border-2">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm font-medium">步驟2：國籍</span>
            <span :class="characterCreationState.selectedNationality ? 'text-green-500' : 'text-red-500'">
              {{ characterCreationState.selectedNationality ? '✓' : '✗' }}
            </span>
          </div>
          <div class="text-xs text-gray-600">
            {{ characterCreationState.selectedNationality ? characterCreationState.selectedNationality.name : '未選擇國籍' }}
          </div>
        </div>
        
        <div :class="characterCreationState.selectedBackground ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-3 rounded-lg border-2">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm font-medium">步驟3：背景</span>
            <span :class="characterCreationState.selectedBackground ? 'text-green-500' : 'text-red-500'">
              {{ characterCreationState.selectedBackground ? '✓' : '✗' }}
            </span>
          </div>
          <div class="text-xs text-gray-600">
            {{ characterCreationState.selectedBackground ? characterCreationState.selectedBackground.name : '未選擇背景' }}
          </div>
        </div>
        
        <div :class="characterCreationState.selectedTrait ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-3 rounded-lg border-2">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm font-medium">步驟4：特徵</span>
            <span :class="characterCreationState.selectedTrait ? 'text-green-500' : 'text-red-500'">
              {{ characterCreationState.selectedTrait ? '✓' : '✗' }}
            </span>
          </div>
          <div class="text-xs text-gray-600">
            {{ characterCreationState.selectedTrait ? characterCreationState.selectedTrait.name : '未選擇特徵' }}
          </div>
        </div>
      </div>

      <!-- 檢查結果概覽 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <!-- 真理檢查 -->
        <div :class="truthCheckResult.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">真理</h4>
            <span :class="truthCheckResult.isValid ? 'text-green-500' : 'text-red-500'" class="text-xl">
              {{ truthCheckResult.isValid ? '✓' : '✗' }}
            </span>
          </div>
          <p class="text-sm">{{ truthCheckResult.current }}/{{ truthCheckResult.required }}</p>
          <p class="text-xs text-gray-600">{{ truthCheckResult.message }}</p>
        </div>

        <!-- 屬性檢查 -->
        <div :class="attributeCheckResult.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">屬性</h4>
            <span :class="attributeCheckResult.isValid ? 'text-green-500' : 'text-red-500'" class="text-xl">
              {{ attributeCheckResult.isValid ? '✓' : '✗' }}
            </span>
          </div>
          <p class="text-sm">總和: {{ attributeCheckResult.total }}/51</p>
          <p class="text-xs text-gray-600">{{ attributeCheckResult.message }}</p>
        </div>

        <!-- 技能檢查 -->
        <div :class="skillCheckResult.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">技能</h4>
            <span :class="skillCheckResult.isValid ? 'text-green-500' : 'text-red-500'" class="text-xl">
              {{ skillCheckResult.isValid ? '✓' : '✗' }}
            </span>
          </div>
          <p class="text-sm">總和: {{ skillCheckResult.total }}/{{ skillCheckResult.expected }}</p>
          <p class="text-xs text-gray-600">{{ skillCheckResult.message }}</p>
        </div>

        <!-- 專精檢查 -->
        <div :class="focusCheckResult.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">專精</h4>
            <span :class="focusCheckResult.isValid ? 'text-green-500' : 'text-red-500'" class="text-xl">
              {{ focusCheckResult.isValid ? '✓' : '✗' }}
            </span>
          </div>
          <p class="text-sm">{{ focusCheckResult.current }}/{{ focusCheckResult.required }}</p>
          <p class="text-xs text-gray-600">{{ focusCheckResult.message }}</p>
        </div>

        <!-- 天賦檢查 -->
        <div :class="talentCheckResult.isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">天賦</h4>
            <span :class="talentCheckResult.isValid ? 'text-green-500' : 'text-red-500'" class="text-xl">
              {{ talentCheckResult.isValid ? '✓' : '✗' }}
            </span>
          </div>
          <p class="text-sm">{{ talentCheckResult.current }}/{{ talentCheckResult.required }}</p>
          <p class="text-xs text-gray-600">{{ talentCheckResult.message }}</p>
        </div>

        <!-- 整體狀態 -->
        <div :class="allChecksValid ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'" 
             class="p-4 rounded-lg border-2">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold">整體狀態</h4>
            <span :class="allChecksValid ? 'text-green-500' : 'text-amber-500'" class="text-xl">
              {{ allChecksValid ? '✓' : '⚠' }}
            </span>
          </div>
          <p class="text-sm">{{ allChecksValid ? '準備完成' : '需要檢查' }}</p>
          <p class="text-xs text-gray-600">{{ allChecksValid ? '所有項目已通過驗證' : '請檢查上述項目' }}</p>
        </div>
        
        <!-- 缺失項目摘要 -->
        <div v-if="!allChecksValid" class="col-span-full">
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h5 class="font-bold text-amber-800 mb-2">⚠️ 需要注意的項目：</h5>
            <ul class="text-sm text-amber-700 space-y-1">
              <li v-if="!characterCreationState.selectedArchetype">• 請回到步驟1選擇原型</li>
              <li v-if="!characterCreationState.selectedNationality">• 請回到步驟2選擇國籍</li>
              <li v-if="!characterCreationState.selectedBackground">• 請回到步驟3選擇背景</li>
              <li v-if="!characterCreationState.selectedTrait">• 請回到步驟4選擇特徵</li>
              <li v-if="!truthCheckResult.isValid">• {{ truthCheckResult.message }}</li>
              <li v-if="!attributeCheckResult.isValid">• {{ attributeCheckResult.message }}</li>
              <li v-if="!skillCheckResult.isValid">• {{ skillCheckResult.message }}</li>
              <li v-if="!focusCheckResult.isValid">• {{ focusCheckResult.message }}</li>
              <li v-if="!talentCheckResult.isValid">• {{ talentCheckResult.message }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 角色名稱設定 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">👤 角色名稱</h3>
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <div class="max-w-md">
          <label for="characterName" class="block text-sm font-medium text-gray-700 mb-2">
            角色名稱
          </label>
          <input
            id="characterName"
            v-model="characterName"
            type="text"
            placeholder="請輸入角色名稱"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
          <p class="text-xs text-gray-500 mt-1">這將成為您角色表上的名稱</p>
        </div>
      </div>
    </div>

    <!-- 計算的最終屬性 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">🧮 計算結果</h3>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 基礎屬性 -->
        <div class="bg-white rounded-lg p-6 border border-gray-200">
          <h4 class="text-lg font-semibold text-gray-800 mb-4">基礎屬性</h4>
          <div class="space-y-2">
            <div v-for="(value, attr) in finalAttributes" :key="attr" 
                 class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium">{{ getAttributeName(attr) }}</span>
              <div class="flex items-center gap-2">
                <span class="text-lg font-bold text-blue-600">{{ value }}</span>
                <span v-if="getAttributeBonus(attr) > 0" class="text-xs text-green-600">
                  (+{{ getAttributeBonus(attr) }})
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 計算的衍生數值 -->
        <div class="bg-white rounded-lg p-6 border border-gray-200">
          <h4 class="text-lg font-semibold text-gray-800 mb-4">衍生數值</h4>
          <div class="space-y-3">
            <!-- 壓力軌 -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium">壓力值</span>
              <span class="text-lg font-bold text-purple-600">{{ calculatedStress }}</span>
            </div>
            
            <!-- 護甲抗性 -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium">護甲抗性</span>
              <span class="text-lg font-bold text-orange-600">{{ calculatedArmorResistance }}</span>
            </div>
            
            <!-- 勇氣抗性 -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium">勇氣抗性</span>
              <span class="text-lg font-bold text-green-600">{{ calculatedCourageResistance }}</span>
            </div>
            
            <!-- 額外語言 -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium">額外語言數</span>
              <span class="text-lg font-bold text-blue-600">{{ calculatedBonusLanguages }}</span>
            </div>
            
            <!-- 挑戰骰加成 -->
            <div class="py-2">
              <span class="font-medium block mb-2">挑戰骰加成</span>
              <div class="space-y-1 text-sm">
                <div class="flex justify-between">
                  <span>近戰 (體魄):</span>
                  <span class="font-bold">+{{ getBonusChallengeDice('BRA') }}🎲</span>
                </div>
                <div class="flex justify-between">
                  <span>遠程 (洞察):</span>
                  <span class="font-bold">+{{ getBonusChallengeDice('INS') }}🎲</span>
                </div>
                <div class="flex justify-between">
                  <span>魔法 (意志):</span>
                  <span class="font-bold">+{{ getBonusChallengeDice('WIL') }}🎲</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 魔法能力檢查 -->
    <div v-if="isMagicUser" class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">🔮 魔法能力</h3>
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-2xl">🧙‍♂️</span>
          <div>
            <h4 class="text-lg font-semibold text-purple-800">檢測到施法者能力</h4>
            <p class="text-sm text-purple-600">{{ magicUserInfo.description }}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-3 bg-white rounded-lg">
            <div class="text-sm text-gray-600 mb-1">施法類型</div>
            <div class="font-bold text-purple-800">{{ magicUserInfo.type }}</div>
          </div>
          <div class="text-center p-3 bg-white rounded-lg">
            <div class="text-sm text-gray-600 mb-1">施法屬性</div>
            <div class="font-bold text-purple-800">{{ magicUserInfo.attribute }}</div>
          </div>
          <div class="text-center p-3 bg-white rounded-lg">
            <div class="text-sm text-gray-600 mb-1">基礎威能</div>
            <div class="font-bold text-purple-800">{{ magicUserInfo.basePower }}🎲</div>
          </div>
        </div>
        
        <div v-if="magicUserInfo.spellCount" class="mt-4">
          <p class="text-sm text-purple-700">
            <strong>初始法術:</strong> 可學習 {{ magicUserInfo.spellCount }} 項法術
            <span v-if="magicUserInfo.tradition">（限{{ magicUserInfo.tradition }}傳統）</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 角色摘要 -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4">📋 角色摘要</h3>
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">基本資訊</h4>
            <div class="space-y-2 text-sm">
              <div><strong>原型:</strong> {{ characterCreationState.selectedArchetype?.chineseName || characterCreationState.selectedArchetype?.name || '未選擇' }}</div>
              <div><strong>國籍:</strong> {{ characterCreationState.selectedNationality?.chineseName || characterCreationState.selectedNationality?.name || '未選擇' }}</div>
              <div><strong>背景:</strong> {{ characterCreationState.selectedBackground?.chineseName || characterCreationState.selectedBackground?.name || '未選擇' }}</div>
              <div><strong>特徵:</strong> {{ characterCreationState.selectedTrait?.chineseName || characterCreationState.selectedTrait?.name || '未選擇' }}</div>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-800 mb-3">選擇統計</h4>
            <div class="space-y-2 text-sm">
              <div><strong>真理數量:</strong> {{ truthCount }} 項</div>
              <div><strong>專精數量:</strong> {{ focusCount }} 項</div>
              <div><strong>天賦數量:</strong> {{ talentCount }} 項</div>
              <div><strong>技能總點數:</strong> {{ skillTotal }} 點</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 警告和建議 -->
    <div v-if="!allChecksValid" class="mb-8">
      <h3 class="text-xl font-bold text-red-600 mb-4">⚠️ 需要注意的問題</h3>
      <div class="space-y-3">
        <div v-if="!truthCheckResult.isValid" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 class="font-semibold text-red-800 mb-2">真理不足</h4>
          <p class="text-sm text-red-700">{{ truthCheckResult.message }}</p>
          <p class="text-xs text-red-600 mt-1">請返回前面的步驟確認真理選擇。</p>
        </div>
        
        <div v-if="!attributeCheckResult.isValid" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 class="font-semibold text-red-800 mb-2">屬性問題</h4>
          <p class="text-sm text-red-700">{{ attributeCheckResult.message }}</p>
          <p class="text-xs text-red-600 mt-1">請檢查屬性分配是否正確。</p>
        </div>
        
        <div v-if="!skillCheckResult.isValid" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 class="font-semibold text-red-800 mb-2">技能問題</h4>
          <p class="text-sm text-red-700">{{ skillCheckResult.message }}</p>
          <p class="text-xs text-red-600 mt-1">請檢查技能點數分配。</p>
        </div>
        
        <div v-if="!focusCheckResult.isValid" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 class="font-semibold text-red-800 mb-2">專精不足</h4>
          <p class="text-sm text-red-700">{{ focusCheckResult.message }}</p>
          <p class="text-xs text-red-600 mt-1">請返回原型和背景步驟確認專精選擇。</p>
        </div>
        
        <div v-if="!talentCheckResult.isValid" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 class="font-semibold text-red-800 mb-2">天賦不足</h4>
          <p class="text-sm text-red-700">{{ talentCheckResult.message }}</p>
          <p class="text-xs text-red-600 mt-1">請返回各步驟確認天賦選擇。</p>
        </div>
      </div>
    </div>

    <!-- 底部導航 -->
    <div class="flex justify-between">
      <button 
        @click="$emit('prev-step')"
        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        上一步
      </button>
      <button 
        @click="finishCharacterCreation"
        :disabled="!allChecksValid"
        :class="[
          'px-6 py-2 rounded-lg transition-colors font-bold',
          allChecksValid
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        ]"
      >
        {{ allChecksValid ? '完成角色建立' : '請先修正問題' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { useAchtungCthulhuStore } from '~/stores/achtungCthulhuStore'

const props = defineProps({
  characterData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['finish-creation', 'prev-step'])

// 使用 Pinia store
const store = useAchtungCthulhuStore()

// 使用全局狀態
const characterCreationState = inject('characterCreationState')

// 角色名稱
const characterName = ref('')

// 基礎數值計算
const baseAttributes = {
  AGI: 6, BRA: 6, COO: 6, INS: 6, REA: 6, WIL: 6
}

// 計算最終屬性
const finalAttributes = computed(() => {
  const attributes = { ...baseAttributes }
  
  // 來自原型的屬性加成
  if (characterCreationState.value.selectedArchetype?.attributeBonus) {
    Object.entries(characterCreationState.value.selectedArchetype.attributeBonus).forEach(([attr, bonus]) => {
      attributes[attr] += bonus
    })
  }
  
  // 來自國籍的屬性加成
  if (characterCreationState.value.selectedNationality?.attributeBonus) {
    Object.entries(characterCreationState.value.selectedNationality.attributeBonus).forEach(([attr, bonus]) => {
      attributes[attr] += bonus
    })
  }
  
  // 來自背景的屬性加成
  if (characterCreationState.value.selectedBackground?.attributeBonus) {
    Object.entries(characterCreationState.value.selectedBackground.attributeBonus).forEach(([attr, bonus]) => {
      attributes[attr] += bonus
    })
  }
  
  // 來自特徵的屬性加成
  if (characterCreationState.value.selectedTrait?.attributeBonus) {
    Object.entries(characterCreationState.value.selectedTrait.attributeBonus).forEach(([attr, bonus]) => {
      attributes[attr] += bonus
    })
  }
  
  // 來自選擇的彈性屬性加成
  if (characterCreationState.value.traitSelections?.flexibleAttribute) {
    const flexAttr = characterCreationState.value.traitSelections.flexibleAttribute
    if (characterCreationState.value.selectedTrait?.flexibleAttributePoints) {
      attributes[flexAttr] += characterCreationState.value.selectedTrait.flexibleAttributePoints
    }
  }
  
  return attributes
})

// 獲取屬性加成（用於顯示）
const getAttributeBonus = (attrCode) => {
  const base = baseAttributes[attrCode]
  const final = finalAttributes.value[attrCode]
  return final - base
}

// 計算總屬性點數
const totalAttributePoints = computed(() => {
  return Object.values(finalAttributes.value).reduce((sum, value) => sum + value, 0)
})

// 計算最終技能點數
const finalSkills = computed(() => {
  const skills = {
    ACADEMIA: 0, ATHLETICS: 0, COMMAND: 0, ENGINEERING: 0,
    FIGHTING: 0, MEDICINE: 0, OBSERVATION: 0, PERSUASION: 0,
    RESILIENCE: 0, STEALTH: 0, SURVIVAL: 0, TACTICS: 0, VEHICLES: 0
  }
  
  // 來自原型的技能加成
  if (characterCreationState.value.selectedArchetype?.skillBonus) {
    Object.entries(characterCreationState.value.selectedArchetype.skillBonus).forEach(([skill, bonus]) => {
      skills[skill] += bonus
    })
  }
  
  // 來自國籍的技能加成
  if (characterCreationState.value.selectedNationality?.skillBonus) {
    Object.entries(characterCreationState.value.selectedNationality.skillBonus).forEach(([skill, bonus]) => {
      skills[skill] += bonus
    })
  }
  
  // 來自背景的技能加成
  if (characterCreationState.value.selectedBackground?.skillBonus) {
    Object.entries(characterCreationState.value.selectedBackground.skillBonus).forEach(([skill, bonus]) => {
      skills[skill] += bonus
    })
  }
  
  // 來自特徵的技能加成
  if (characterCreationState.value.selectedTrait?.skillBonus) {
    Object.entries(characterCreationState.value.selectedTrait.skillBonus).forEach(([skill, bonus]) => {
      skills[skill] += bonus
    })
  }
  
  // 來自特徵的彈性技能選擇
  if (characterCreationState.value.traitSelections?.flexibleSkills) {
    const flexSkills = characterCreationState.value.traitSelections.flexibleSkills
    const points = characterCreationState.value.selectedTrait?.flexibleSkillPoints || 1
    flexSkills.forEach(skill => {
      skills[skill] += points
    })
  }
  
  // 來自特徵的特殊技能選擇
  if (characterCreationState.value.traitSelections?.specialSkill) {
    skills[characterCreationState.value.traitSelections.specialSkill] += 1
  }
  
  // 處理特殊規則
  if (characterCreationState.value.selectedTrait?.specialSkillRule === 'all-zero-skills') {
    // 博學多能者：所有0級技能+1
    Object.keys(skills).forEach(skill => {
      if (skills[skill] === 0) {
        skills[skill] += 1
      }
    })
  }
  
  return skills
})

// 計算技能總點數
const skillTotal = computed(() => {
  return Object.values(finalSkills.value).reduce((sum, value) => sum + value, 0)
})

// 計算專精數量
const focusCount = computed(() => {
  let count = 0
  
  // 來自原型的專精
  if (characterCreationState.value.archetypeSelections?.selectedFocuses) {
    count += characterCreationState.value.archetypeSelections.selectedFocuses.length
  }
  
  // 來自背景的專精
  if (characterCreationState.value.backgroundSelections?.selectedFocuses) {
    count += characterCreationState.value.backgroundSelections.selectedFocuses.length
  }
  
  // 來自特徵的專精
  if (characterCreationState.value.traitSelections?.selectedFocuses) {
    count += characterCreationState.value.traitSelections.selectedFocuses.length
  }
  
  return count
})

// 計算天賦數量
const talentCount = computed(() => {
  let count = 0
  
  // 原型天賦
  if (characterCreationState.value.archetypeSelections?.selectedTalent) count++
  
  // 背景天賦
  if (characterCreationState.value.backgroundSelections?.selectedTalent) count++
  
  // 特徵天賦
  if (characterCreationState.value.traitSelections?.talent) count++
  
  return count
})

// 計算真理數量
const truthCount = computed(() => {
  let count = 0
  
  // 國籍真理（國籍本身就是真理）
  if (characterCreationState.value.selectedNationality) count++
  
  // 語言真理（國籍選擇的語言）
  if (characterCreationState.value.nationalitySelections?.selectedLanguage) count++
  
  // 背景真理
  if (characterCreationState.value.backgroundSelections?.selectedTruth) count++
  
  // 特徵真理
  if (characterCreationState.value.traitSelections?.truth) count++
  
  return count
})

// 檢查是否為施法者
const isMagicUser = computed(() => {
  // 檢查是否為神秘學者原型且有施法者天賦
  const isOccultArchetype = characterCreationState.value.selectedArchetype?.key === 'occult-scholar'
  if (!isOccultArchetype) return false
  
  // 檢查選擇的天賦是否有施法者關鍵詞
  const selectedTalents = [
    characterCreationState.value.archetypeSelections?.selectedTalent,
    characterCreationState.value.backgroundSelections?.selectedTalent,
    characterCreationState.value.traitSelections?.talent
  ].filter(Boolean)
  
  return selectedTalents.some(talent => 
    talent.keywords && talent.keywords.includes('施法者')
  )
})

// 魔法使用者資訊
const magicUserInfo = computed(() => {
  if (!isMagicUser.value) return null
  
  // 根據天賦或背景判斷施法類型
  const selectedTalent = characterCreationState.value.archetypeSelections?.selectedTalent ||
                          characterCreationState.value.backgroundSelections?.selectedTalent ||
                          characterCreationState.value.traitSelections?.talent
  
  // 預設為研究者類型
  return {
    type: '研究者',
    attribute: '智識 (Reason)',
    basePower: 2,
    spellCount: 2,
    description: '透過嚴謹的學術途徑習得魔法，長年鑽研古籍與禁書'
  }
})

// 計算衍生數值
const calculatedStress = computed(() => {
  const brawn = finalAttributes.value.BRA
  const will = finalAttributes.value.WIL
  const resilience = finalSkills.value.RESILIENCE
  
  return Math.max(brawn, will) + resilience
})

const calculatedArmorResistance = computed(() => {
  const brawn = finalAttributes.value.BRA
  if (brawn <= 8) return 0
  if (brawn === 9) return 1
  if (brawn <= 11) return 2
  if (brawn <= 13) return 3
  if (brawn <= 15) return 4
  return 5
})

const calculatedCourageResistance = computed(() => {
  const will = finalAttributes.value.WIL
  if (will <= 8) return 0
  if (will === 9) return 1
  if (will <= 11) return 2
  if (will <= 13) return 3
  if (will <= 15) return 4
  return 5
})

const calculatedBonusLanguages = computed(() => {
  const reason = finalAttributes.value.REA
  if (reason <= 10) return 1
  return 2
})

const getBonusChallengeDice = (attrCode) => {
  const value = finalAttributes.value[attrCode]
  if (value <= 8) return 0
  if (value === 9) return 1
  if (value <= 11) return 2
  if (value <= 13) return 3
  if (value <= 15) return 4
  return 5
}

// 數值檢查
const truthCheckResult = computed(() => {
  const required = 4
  const current = truthCount.value
  const isValid = current >= required
  
  return {
    isValid,
    current,
    required,
    message: isValid 
      ? '真理數量符合要求' 
      : `缺少 ${required - current} 項真理（背景、特徵、國籍、語言各一項）`
  }
})

// 各步驟貢獻分析
const archetypeContribution = computed(() => {
  const archetype = characterCreationState.value.selectedArchetype
  const selections = characterCreationState.value.archetypeSelections
  
  if (!archetype) {
    return { talents: [], focuses: [], attributes: [], skills: [], truths: [] }
  }
  
  const talents = []
  
  // 原型自帶的天賦（如果有）
  if (archetype.talents) {
    talents.push(...archetype.talents.map(t => t.chineseName || t.name))
  }
  
  // 原型選擇的天賦
  if (selections?.selectedTalent) {
    talents.push(selections.selectedTalent.chineseName || selections.selectedTalent.name)
  }
  
  return {
    talents,
    focuses: selections?.selectedFocuses || [],
    attributes: Object.entries(archetype.attributeBonus || {}).map(([attr, bonus]) => `${attr}+${bonus}`),
    skills: Object.entries(archetype.skillBonus || {}).map(([skill, bonus]) => `${skill}+${bonus}`),
    truths: []
  }
})

const nationalityContribution = computed(() => {
  const nationality = characterCreationState.value.selectedNationality
  const selections = characterCreationState.value.nationalitySelections
  
  if (!nationality) {
    return { talents: [], focuses: [], attributes: [], skills: [], truths: [], languages: [] }
  }
  
  const truths = [nationality.name] // 國籍作為真理
  if (selections?.selectedLanguage) {
    truths.push(selections.selectedLanguage) // 選擇的語言作為真理
  } else if (nationality.languages?.length === 1) {
    truths.push(nationality.languages[0]) // 單一語言自動作為真理
  }
  
  return {
    talents: [],
    focuses: [],
    attributes: Object.entries(nationality.attributeBonus || {}).map(([attr, bonus]) => `${attr}+${bonus}`),
    skills: Object.entries(nationality.skillBonus || {}).map(([skill, bonus]) => `${skill}+${bonus}`),
    truths,
    languages: nationality.languages || []
  }
})

const backgroundContribution = computed(() => {
  const background = characterCreationState.value.selectedBackground
  const selections = characterCreationState.value.backgroundSelections
  
  if (!background) {
    return { talents: [], focuses: [], attributes: [], skills: [], truths: [] }
  }
  
  const truths = selections?.selectedTruths || []
  const talents = []
  
  // 背景提供的天賦
  if (background.talents) {
    talents.push(...background.talents.map(t => t.name))
  }
  
  // 背景選擇的天賦
  if (selections?.selectedTalent) {
    talents.push(selections.selectedTalent.chineseName || selections.selectedTalent.name)
  }
  
  const attributes = []
  const skills = []
  
  // 背景的屬性/技能加成
  if (background.attributeBonus) {
    attributes.push(...Object.entries(background.attributeBonus).map(([attr, bonus]) => `${attr}+${bonus}`))
  }
  if (background.skillBonus) {
    skills.push(...Object.entries(background.skillBonus).map(([skill, bonus]) => `${skill}+${bonus}`))
  }
  
  // 背景選擇的彈性屬性/技能
  if (selections?.flexibleAttributes) {
    attributes.push(...selections.flexibleAttributes.map(attr => `${attr}+1`))
  }
  if (selections?.flexibleSkills) {
    skills.push(...selections.flexibleSkills.map(skill => `${skill}+1`))
  }
  
  return {
    talents,
    focuses: (selections?.selectedFocuses || []).map(focus => 
      typeof focus === 'object' ? focus.name : focus
    ),
    attributes,
    skills,
    truths
  }
})

const traitContribution = computed(() => {
  const trait = characterCreationState.value.selectedTrait
  const selections = characterCreationState.value.traitSelections
  
  if (!trait) {
    return { talents: [], focuses: [], attributes: [], skills: [], truths: [] }
  }
  
  const truths = selections?.selectedTruths || []
  const talents = []
  const focuses = []
  const attributes = []
  const skills = []
  
  // 特徵提供的天賦
  if (trait.talents) {
    talents.push(...trait.talents.map(t => t.name))
  }
  
  // 特徵選擇的天賦
  if (selections?.talent) {
    talents.push(selections.talent.chineseName || selections.talent.name)
  }
  
  // 特徵提供的專精
  if (trait.focuses) {
    focuses.push(...trait.focuses)
  }
  
  // 特徵選擇的專精
  if (selections?.selectedFocuses) {
    focuses.push(...selections.selectedFocuses.map(focus => 
      typeof focus === 'object' ? focus.name : focus
    ))
  }
  
  // 特徵的屬性加成
  if (trait.attributeBonus) {
    attributes.push(...Object.entries(trait.attributeBonus).map(([attr, bonus]) => `${attr}+${bonus}`))
  }
  
  // 特徵的技能加成
  if (trait.skillBonus) {
    skills.push(...Object.entries(trait.skillBonus).map(([skill, bonus]) => `${skill}+${bonus}`))
  }
  
  // 特徵選擇的彈性屬性/技能
  if (selections?.flexibleAttributes) {
    attributes.push(...selections.flexibleAttributes.map(attr => `${attr}+${trait.flexibleAttributePoints || 1}`))
  }
  if (selections?.flexibleSkills) {
    skills.push(...selections.flexibleSkills.map(skill => `${skill}+${trait.flexibleSkillPoints || 1}`))
  }
  
  // 特殊技能選擇
  if (selections?.specialSkill) {
    skills.push(`${selections.specialSkill}+1`)
  }
  
  return {
    talents,
    focuses,
    attributes,
    skills,
    truths
  }
})

const attributeCheckResult = computed(() => {
  const total = totalAttributePoints.value
  const isValid = total === 51 && Object.values(finalAttributes.value).every(val => val >= 6 && val <= 11)
  
  return {
    isValid,
    total,
    message: total !== 51 
      ? `屬性總和應為51，目前為${total}` 
      : Object.values(finalAttributes.value).some(val => val < 6 || val > 11)
        ? '所有屬性應介於6-11之間'
        : '屬性分配正確'
  }
})

const skillCheckResult = computed(() => {
  const total = skillTotal.value
  const isDilettante = characterCreationState.value.selectedTrait?.key === 'dilettante'
  const expected = isDilettante ? '17+' : 17
  const isValid = isDilettante ? total >= 17 : total === 17
  const maxSkillValid = Object.values(finalSkills.value).every(val => val <= 5)
  
  return {
    isValid: isValid && maxSkillValid,
    total,
    expected,
    message: !maxSkillValid 
      ? '技能等級不得超過5'
      : isValid 
        ? '技能點數分配正確' 
        : `技能總和應為${expected}，目前為${total}`
  }
})

const focusCheckResult = computed(() => {
  // 基本要求：原型2項、背景2項，總共4項
  let required = 4
  let current = focusCount.value
  
  // 檢查特徵是否提供額外專精
  if (characterCreationState.value.traitSelections?.selectedFocuses?.length > 0) {
    required += characterCreationState.value.traitSelections.selectedFocuses.length
  }
  
  const isValid = current >= 4 // 至少要有基本的4項專精
  
  return {
    isValid,
    current,
    required: 4, // 顯示基本要求
    message: isValid 
      ? `專精數量符合要求 (${current}項)` 
      : `缺少 ${4 - current} 項專精（原型2項、背景2項為基本要求）`
  }
})

const talentCheckResult = computed(() => {
  const required = 3
  const current = talentCount.value
  const isValid = current >= required
  
  return {
    isValid,
    current,
    required,
    message: isValid 
      ? '天賦數量符合要求' 
      : `缺少 ${required - current} 項天賦（原型、背景、特徵各一項）`
  }
})

const allChecksValid = computed(() => {
  return truthCheckResult.value.isValid &&
         attributeCheckResult.value.isValid &&
         skillCheckResult.value.isValid &&
         focusCheckResult.value.isValid &&
         talentCheckResult.value.isValid
})

// 輔助函數
const getAttributeName = (attrCode) => {
  const names = {
    AGI: '敏捷', BRA: '體魄', COO: '協調',
    INS: '洞察', REA: '智識', WIL: '意志'
  }
  return names[attrCode] || attrCode
}

// 完成角色創建
const finishCharacterCreation = () => {
  // 構建完整的角色創建資料
  const finalCharacterData = {
    // 基本選擇
    archetype: characterCreationState.value.selectedArchetype,
    nationality: characterCreationState.value.selectedNationality,
    background: characterCreationState.value.selectedBackground,
    trait: characterCreationState.value.selectedTrait,
    
    // 詳細選擇
    archetypeSelections: characterCreationState.value.archetypeSelections,
    nationalitySelections: characterCreationState.value.nationalitySelections,
    backgroundSelections: characterCreationState.value.backgroundSelections,
    traitSelections: characterCreationState.value.traitSelections,
    
    // 計算結果
    finalAttributes: finalAttributes.value,
    finalSkills: finalSkills.value,
    calculatedValues: {
      stress: calculatedStress.value,
      armorResistance: calculatedArmorResistance.value,
      courageResistance: calculatedCourageResistance.value,
      bonusLanguages: calculatedBonusLanguages.value,
      bonusChallengeDice: {
        melee: getBonusChallengeDice('BRA'),
        ranged: getBonusChallengeDice('INS'),
        magic: getBonusChallengeDice('WIL')
      }
    },
    
    // 魔法使用者資訊
    magicInfo: magicUserInfo.value,
    
    // 驗證結果
    validationResults: {
      truth: truthCheckResult.value,
      attributes: attributeCheckResult.value,
      skills: skillCheckResult.value,
      focuses: focusCheckResult.value,
      talents: talentCheckResult.value,
      allValid: allChecksValid.value
    }
  }
  
  // 檢查是否所有驗證都通過
  if (!allChecksValid.value) {
    alert('請先完成所有必要的選擇並確保數值正確')
    return
  }
  
  try {
    // 設定角色名稱（如果有提供）
    if (characterName.value.trim()) {
      store.setCharacterName(characterName.value.trim())
    }
    
    // 應用角色創建資料到 Pinia store
    store.applyCharacterCreationData(finalCharacterData)
    
    // 顯示成功訊息
    alert('角色創建完成！所有資料已應用到角色表。')
    
    // 發送完成事件給父組件
    emit('finish-creation', finalCharacterData)
    
  } catch (error) {
    console.error('角色創建應用失敗:', error)
    alert('角色創建時發生錯誤，請重試。')
  }
}
</script>