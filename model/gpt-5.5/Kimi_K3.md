# GPT-5.5 — findings by Kimi K3

- Source: OpenAI / GPT-5.5 (`gpt-5.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI flagship (released 2026-04-23, six weeks after GPT-5.4; codename "Spud"), a reasoning model built for complex professional and agentic work. Strong IDE/coding model of its cycle — chart-topping τ²-bench tool-use score and a claimed state of the art on 14 benchmarks at launch. Sibling: GPT-5.5 Pro.
- **Provider / access:** OpenAI API (`gpt-5.5`; Chat Completions, Responses and Batch APIs; no Realtime/Assistants/fine-tuning). Also listed on OpenCode Zen at $5/$30.
- **Release / knowledge:** released 2026-04-23; knowledge cutoff 2025-12-01 (OpenAI platform docs).
- **IDs:** `gpt-5.5`; default snapshot `gpt-5.5-2026-04-23`; `openai/gpt-5.5` on OpenCode Zen.
- **Context window:** 1,050,000 tokens; 128,000 max output tokens (OpenAI platform docs).
- **Modalities:** text/image in; text out only; reasoning yes (effort none/low/medium/high/xhigh); function calling, web/file/tool search, code interpreter, hosted shell, apply_patch, computer use, MCP.
- **Pricing (as of 2026-09-29):** $5.00 / 1M input, $0.50 cached input, $30.00 / 1M output (OpenAI platform docs; matches Zen). Prompts >272K input tokens are billed at 2x input and 1.5x output for the full session; 10% uplift on data-residency endpoints.
- **Architecture:** proprietary (OpenAI); params undisclosed; first fully retrained base since GPT-4.5 per third-party reviews.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **98.0%** — best measured among compared models (benchlm.ai)
- Terminal-Bench 2.0: **82.7%** (OpenAI launch claim, rits.shanghai.nyu.edu / tech-insider.org); **82.0%** (benchlm.ai); Terminal-Bench 2.1 (Vals): **76.4%** (benchlm.ai)
- GDPval-AA: **1396 Elo** (41.8% normalized) (benchlm.ai)
- OSWorld-Verified: **78.7%** (note: OSWorld 2.0 13.0% — sharp regression on the newer version); CyberGym: **81.8%**; MCP Atlas: **75.3%**; BrowseComp: **84.4%**; Toolathlon: **55.6%** (benchlm.ai)
- Claw-track: ResearchClawBench **17.0%** (benchlm.ai); Claw-Eval proper: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (AA 93.5%; Vals 93.2%) (benchlm.ai)
- HLE: **52.2%** (w/ tools); 41.4% (no tools); AA-HLE 45.8% (benchlm.ai)
- AA-LCR: **84.3%**; CritPt: **27.1%** (benchlm.ai)
- ARC-AGI-2: **85.0%**; ARC-AGI-3: **0.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **38.4**; BenchLM overall **69.02/100, #17 of 512** (2026-09-28)
- AA-Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (benchlm.ai)
- FrontierMath v2 T1–3: **51.7%**, Tier 4: **35.4%** (benchlm.ai)
- MMLU-Pro (Vals): **88.1%** (benchlm.ai); MMLU 92.4% reported by third-party launch coverage (tokenmix.ai)

Coding:

- SWE-bench Verified: **88.7%** (OpenAI launch claim as reported by ai.cc / tokenmix.ai); SWE-bench (Vals): **82.6%** (benchlm.ai)
- SWE-bench Pro: **58.6%** (OpenAI launch claim, rits.shanghai.nyu.edu; matches benchlm.ai 58.6%)
- LiveCodeBench (Vals): **85.3%**; Vibe Code Bench: **69.9%** (benchlm.ai)
- AA-SciCode: **55.8%**; AA Coding Index: **74.9** (benchlm.ai)
- React Native Evals: **84.7%**; CursorBench 3.2: **58.4%**; FrontierCode 1.1 Main: **43.0%** (benchlm.ai)

Long context:

- MRCR v2 64K–128K: **83.1%**; MRCR v2 128K–256K: **87.5%** (benchlm.ai); AA-LCR 84.3%; no 512K–1M MRCR row found.

Multimodal:

- MMMU-Pro: **81.2%** (w/ Python 83.2%; AA 79.9%); OfficeQA Pro: **54.1%**; Design Arena Website: **1267 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Class-best τ²-bench 98% plus OSWorld-Verified 78.7%, CyberGym 81.8%, BrowseComp 84.4%; capped by OSWorld 2.0 collapse (13.0%) and ExploitGym 13.4%.
- **Reasoning: 83/100.** GPQA 93.6%, HLE 52.2%, LCR 84.3%, ARC-AGI-2 85%; capped by FrontierMath v2 51.7%/35.4% and hallucination rate 89%.
- **Context window: 86/100.** 1.05M window with MRCR v2 83.1–87.5% up to 256K and LCR 84.3%; capped by missing >256K retrieval rows and the 2x/1.5x long-context surcharge above 272K.
- **Multimodal: 75/100.** Vision/doc input is strong for the image-in/text-out band (MMMU-Pro ~81–83%, OfficeQA Pro 54.1%); no audio/video, text-only output.
- **Coding: 83/100.** SWE-bench Verified 88.7% launch claim; LiveCodeBench 85.3%, SWE-bench (Vals) 82.6%, Coding Index 74.9; capped by CursorBench 3.2 58.4% and SWE-bench Pro 58.6%.
- **Cost efficiency: 45/100.** Verified $5/$30 per Mtok ($0.50 cached) — 2x GPT-5.4 pricing — plus a long-context surcharge above 272K input tokens.
- **Overall Score: 82.8/100.** Mean of the five quality dims (87+83+86+75+83)/5 = 82.8. Best fit: tool-call-heavy agent pipelines (τ²-class) and IDE/agentic coding on the OpenAI stack.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (OpenAI platform docs, openai.com launch coverage, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed $5/$30 pricing, 2026-04-23 release, 2025-12-01 cutoff, 1.05M context / 128K max output, snapshot `gpt-5.5-2026-04-23`, long-context surcharge; added SWE-bench Verified 88.7% and Terminal-Bench 2.0 82.7% launch claims; recalibrated Multimodal into the image-in/text-out band (78→75) and Cost efficiency to verified pricing (60→45); Overall 83→82.8.
- Future sources: add a new file next to this one using the same headings.
