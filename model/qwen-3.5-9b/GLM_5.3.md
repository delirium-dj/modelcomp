# Qwen 3.5 9B — findings by GLM 5.3

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba's 9B open-weights multimodal foundation model (Apache 2.0; released **2026-02-24**, confirmed) — unified vision-language with text/image/video input, hybrid Gated DeltaNet + Gated Attention, thinking mode, and 201-language coverage. Second pass adds the settled ladder and it reframes the model: **thinking best at just 49.0 #394/761 (lower half)** — the era's small-model ceiling shows in **AIME 2026 92.5% #23 (elite) and τ² 86.8% #93** against **SciCode 27.6%, TB 2.1 21-29%, τ³ 7.0% #160, GDPval 0.0% #210, HLE 9-15%, CritPt 0.3%, AA II 11-13, and non-hallucination 1.6-16% (catastrophic)**. The first pass's vendor-card picture (near-frontier GPQA 81.7%, strong vision suite) reads consistent on the vision side but far more bounded on knowledge and honesty once measured. Top use case: small self-hosted multimodal agent base — with retrieval attached, never for raw factual recall.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-9B` (Apache 2.0; SGLang/vLLM/KTransformers/Transformers); DashScope; **six OpenRouter providers — Darkbloom fp4 $0.080/$0.130 (floor), Venice/SiliconFlow/DeepInfra $0.100/$0.150, Parasail bf16, Together $0.170/$0.250**.
- **Release / knowledge:** **2026-02-24** (BenchLeader; the "Medium Series" wave per this cycle's qwen-3.5 pass); knowledge cutoff not stated publicly.
- **IDs:** `Qwen/Qwen3.5-9B` / DashScope `qwen3.5-9b` (no OpenCode Zen ID).
- **Context window:** **262,144 native** (confirmed); extensible to 1.01M via YaRN (documented, unscored — known shorter-context degradation).
- **Modalities:** text + image + video in; text out; thinking on by default (`enable_thinking`; the thinking config measures best); tool calls (Qwen-Agent/Qwen Code/MCP/`qwen3_coder`); 201 languages.
- **Pricing (as of 2026-10-13):** **Apache-2.0 open weights ($0 license)**; hosted floor **$0.08/$0.13** (Darkbloom fp4) with $0.10/$0.15 mainstream; blended $0.155/M — "among the cheapest fifth"; **$0.0001 per chat, $0.0092 per agentic session**; 58 tok/s at thinking (36 s first answer — slow); up to 98 tok/s no-reasoning.
- **Architecture:** 9B causal LM + vision encoder (~10B safetensors total); 32 layers, hybrid 8 × (3 × Gated DeltaNet → FFN → 1 × Gated Attention → FFN); MTP support; padded 248K vocab.

### Raw benchmarks found

> Second pass adds the settled BenchLeader ladder (best = thinking **49.0 #394/761**, trend 33→45→57 rising, last measured 2026-10-10). Category scores (thinking): **Instruction following 66 (best)**, Long context 60, Multimodal 52, Knowledge 38, Reasoning 42, Agents & tools 41, **Composite 42 (worst)**.

Agent / tool use:

- **τ²-Bench: 85.1-86.8% #83-93** — good at every effort (consistent with the vendor's TAU2 79.1%); **τ³-Banking: 7.0% #160 (thinking — dreadful, gap filled)**; **GDPval-AA: 0.0% #210 (floor, gap filled)**
- Terminal-Bench: 2.1 (AA) **21.4% #166 (no-reasoning) / 29.2% #153 (thinking)** — confirms the third-party 27.0%; TB public 9.2% #82; **TB 4.0: 0.5% #132**; TB Hard 18.2-24.2% #142-170
- Vendor-card rows retained: BFCL-V4 66.1%; the visual-agent trio (OSWorld-Verified 41.8%, AndroidWorld 57.8%, ScreenSpot Pro 65.2%); Toolathlon 25.9% and AutomationBench 5.0% (third-party, retained); Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 78.9-79.0% #126-127 / AA 78.6-80.6% #186-204 — well below the 90% bar (the vendor's 81.7% is the same band)
- **HLE (AA): 9.4% #324 (no-reasoning) / 14.9% #244 (thinking)** — dreadful (gap filled); **CritPt: 0.3-0.6% #243-259** (floor)
- Math: **AIME 2026: 92.5% #23 (MathArena — elite)**; HMMT Feb 2026 71.2% #29; OTIS 61.7% #157 / 42.8%; Apex 0.5% #41; Chess 12% #123; LMCA 24.5% #130; DTBench 71.2% #135
- **Honesty catastrophic: AA-Omniscience non-hallucination 1.6% #535 (no-reasoning) / 16.4% #320 (thinking)**; accuracy 14.0-16.4% #374-430; Omniscience −53.5 to −70.7 — never trust its facts unverified
- **AA II 11.2-13.3 #300-346** — very weak; ECI 139.5 #111; **IFBench 66.7% #90 (thinking)** — IF-66 is its best category; vendor knowledge rows retained (MMLU-Pro 82.5%, MMLU-Redux 91.1%, C-Eval 88.2%, SuperGPQA 58.2%)

Coding:

- **SciCode: 27.6% (Epoch) / 29.5% (AA) #194-202** — dreadful (the vendor had no SciCode row; gap filled at the floor); **TB 2.1 21-29%, TB 4.0 0.5%**
- Vendor/third-party rows retained: SWE-bench Verified 60.0% avg@3, SWE-Pro 32.0% (Xiaomi report), LiveCodeBench v6 65.6%, OJBench 29.2% — the 9B ceiling is exactly where the first pass placed it

Long context:

- 262K native; **AA-LCR: 46.0% #319 (no-reasoning) / 70.0% #208 (thinking)** — the thinking mode buys 24 points of retrieval; LongBench v2 55.2% (vendor, retained); no MRCR/RULER rows.

Multimodal:

- **MMMU-Pro (AA): 66.8% #164 (no-reasoning) / 69.3% #149 (thinking)** — consistent with the vendor's 70.1%; the strong vendor video suite (VideoMME 84.5%, MLVU 84.4%, VideoMMMU 78.9%) remains uncorroborated but class-plausible; Multimodal category 52. Text+image+video in, text out.

### Normalized scores (1–100)

- **Tool use: 54/100.** Lowered from 62: τ² 86.8% #93 and the visual-agent trio remain genuinely good for 9B — but τ³ 7.0% #160, GDPval 0.0% #210, TB 2.1 21-29%, TB 4.0 0.5%, and Agents-41 cap it hard.
- **Reasoning: 58/100.** Lowered from 70: the elite AIME 2026 92.5% #23 and HMMT #29 are real — but GPQA 78.6-80.6% below bar, HLE 9-15%, CritPt 0.3%, AA II 11-13, and the catastrophic honesty (non-hall ≤16.4%) reframe it as a math-competition specialist with a knowledge floor.
- **Context window: 72/100.** Held: 262K native confirmed; AA-LCR 70.0% #208 at thinking is respectable; the YaRN 1.01M extension stays unscored.
- **Multimodal: 72/100.** Lowered from 82: the measured AA MMMU-Pro 66.8-69.3% is consistent with the vendor, and the video suite is class-plausible — but nothing measured above the low-70s, and Multimodal-52 as the category tempers the vendor-table impression.
- **Coding: 50/100.** Lowered from 62: the gap filled at the floor — SciCode 27.6-29.5% is dreadful, TB 2.1 21-29% weak, TB 4.0 0.5% — against the retained LCB 65.6% / SWE-V 60% avg@3 vendor-class rows; the 9B coding ceiling stands, but the measured tail is worse than the first pass showed.
- **Cost efficiency: 96/100.** Raised from 95: hosted floor $0.08/$0.13 with $0.10/$0.15 mainstream, $0.0001/chat, $0.0092/session, Apache-2.0 self-host on a single GPU — outstanding small-model economics.
- **Overall Score: 61/100.** (54 + 58 + 72 + 72 + 50) / 5 = 61.2 → 61, down from 70. Best-fit: a $0.10/$0.15 multimodal agent base with one elite trick (AIME-2026-class competition math) and good τ²/IF for the size — but its knowledge honesty is the worst band measured this cycle (non-hall 1.6-16.4%), SciCode/TB/τ³/GDPval all sit at the floor, and every factual output needs retrieval. Use it as a cheap self-hosted vision-agent executor, never as a knower.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full 3-setting ladder as of 2026-10-10 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, MathArena, LiveBench-adjacent DTBench/LMCA; six OpenRouter provider rows resolving the hosted-price unknown incl. the Darkbloom fp4 floor; the first-pass vendor-card and Xiaomi-MiMo-V2.6-report rows retained where not contradicted — GPQA/MMMU-Pro consistent, SciCode/TB filled at the floor); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
