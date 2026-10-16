# Mistral Large 4 — findings by Cat Jam

- Source: Mistral / Mistral Large 4 (`opencode/mistral-large-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (public preview; open weights promised by end of Oct 2026)
- **Short description:** Mistral's 1.05T MoE flagship (52B active, 1.6B vision encoder) for reasoning, coding, agentic + cybersecurity. Initial 2-week sale price, open weights pending.
- **Provider / access:** Mistral API (Mistral Studio) in public preview (`mistral-large-4-0` on OpenRouter, standard + discounts). Text/image in; text out.
- **Release / knowledge:** Released public preview 2026-10-06; release/October weights; knowledge unspecified.
- **IDs:** `mistral-large-4` (Mistral API) / OpenRouter `mistralai/mistral-large-4-0`
- **Context window:** 1,048,576 tokens; max completion 262,144. (OpenRouter lists 262K completion; official doc says up to 256K? Document says 262144.)
- **Modalities:** Text, image input; text output. Supports function calling, structured outputs. Reasoning mode available (hybrid instruct+reasoning model).
- **Pricing (as of 2026-10-16):** Sale price 50% off for first 2 weeks listed: $0.68 / $2.09 per 1M input/output; standard list $1.36/$4.18; cached read $0.14 (official) / $0.07 launch discount. Cache write maybe not stated. (OpenRouter shows $0.68/$2.09 effective). Strong value cyber model.
- **Architecture:** Open-weight hybrid instruct-and-reasoning MoE, 1.05T total, 52B active per launch announcement; 1.6B vision encoder; ~160 languages; Native multimodal. Weights not yet downloadable (pending).

### Raw benchmarks found (Mistral launch + independent AA/OpenRouter)

Agent / tool use:

- CyberGym-E2E-AA: **82%** (Mistral blog; AA measured; highest vs MiMo 79, GPT-6 Athena 78, GPT-6 Luna 78)
- Artificial Analysis Cyber Index: **50** (AA, level with GLM-5.3-Flash)
- CWE-Bench-AA: 51% (independent publisher-reported)
- DeepSecBench-AA: 16% (AA)
- Lakera B3 security benchmark: 93.3% resistance (internal? Mistral reported)
- AutomationBench: **59.9%**
- Toolathlon? not in sampled AA/OpenRouter summary
- GDPval-AA: 46.1% (AA measured)
- AA-Briefcase v1.1: 1393 Elo (benchlang/BenchLM)
- AA-LCR: 81.3%
- OSWorld-Verified? not in table except no
- GDPval-AA percent 46.1; Cybench 93.0 (Vals AI)
- Vals Cybench 93.0

Reasoning / knowledge:

- HLE (AA): **35.0%** (AA measured, preview reason mode?)
- AA Intelligence Index: **38.4** (AA measured)
- AA-Omniscience Index: -5.3; accuracy 25.8%; non-hall 58.1%
- CritPt: 10.6%.
- AAA? LCR 81.3
- KORA 1.691 (Mistral reported safety)
- (GPQA not sampled on OpenRouter LCR? Not in list; AAA GPQA not in ML summary; AA says no separately listed maybe. Use not found or AA HLE/Cyber major)

Coding:

- DeepSWE v1.1: 61.7% (Mistral launch) / Vals? Terminal-Bench? Independent Vals reports Vibe Code Bench 78.4; AA-TB4 26.8.
- Coding Agent Index (AA): 49.8 (Mistral claim leading DeepSeek V4 Pro / Qwen 3.8 Max).
- Vals Vibe Code Bench 78.4.
- Terminal-Bench 4.0: 26.8 (AA max)
- SciCode AA: 54.2%
- Dense 200 (visual grounding): 42% (vs GPT-6 Astra 41)

Multimodal:

- Text/image in; text out. Dense 200 42%. No audio/video input.
- Design Arena Elos: Website 1259, Data Visualization 1279, UI 1273, Code Categories 1260 etc.
- MMMU-Pro (AA) 76.4.

Long context:

- 1M context, 262K output. LCR 81.3. No external MRCR score in sampled data; cap top-end.

### Normalized scores (1–100)

- **Tool use: 84/100.** CyberGym 82%, AutomationBench 59.9, GDPval 46.1 (vs AA index 38), CR/CyberGym top agent; TB4 26.8 caps.
- **Reasoning: 78/100.** HLE 35.0, AA Index 38.4, LCR 81.3, CritPt 10.6, CyberGym 82. Cost/Compute unreflected.
- **Context window: 90/100.** 1M context with LCR 81.3; no vendor long-context retrieval score in sampled table.
- **Multimodal: 84/100.** Text/image; Dense 200 42 (vs GPT-6 Astra 41); designed for European enterprise tasks (visual grounding ±).
- **Coding: 80/100.** DeepSWE 61.7, Coding Index 49.8, TB4 26.8, AA-SciCode 54.2. Pro claims only on product-coding tasks.
- **Cost efficiency: 92/100.** Launch sale $0.68/$2.09 per 1M (cache $0.07), list is $1.36/$4.18. Strong value for cyber/coding.
- **Overall Score: 83/100.** Mean (84+78+90+84+80)/5 = 83.2. European frontier open (weights pending) cyber-first model at competitive value.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Mistral blog/open, Tom's Hardware independent tests, OpenRouter, Mistral Docs, BenchLM, llm.ing); scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
