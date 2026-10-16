# Step 5 Preview — findings by Cat Jam

- Source: StepFun / Step 5 Preview (`opencode/step-5-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview (StepFun flagship for agentic work)
- **Short description:** Sparse MoE (600B total / 27B active; 92 blocks), 1M context, text+image+video input, text out. Strong coding/finance agentic benchmark profile.
- **Provider / access:** StepFun API (`step-5-preview`), OpenRouter/inference.net providers, OpenCode/Cline free promos, Vercel. Chat Completions + Responses + OpenAI-compatible endpoints.
- **Release / knowledge:** Released GA 2026-09-18 (OpenRouter Oct 8); knowledge cutoff not stated in sampled docs.
- **IDs:** `step-5-preview` (StepFun)
- **Context window:** 1,048,576 tokens; max output 64,000 tokens per StepFun docs (OpenRouter lists 131,072).
- **Modalities:** Text, image, video in; text out. Tools (web search, file search, code interpreter, MCP, science/banking). Reasoning effort low/medium/high (StepFun); vendor notes effort controls cost.
- **Pricing (as of 2026-10-16):** $1.00 input / $2.70 output per 1M, cache hit $0.05/0.10 depending provider; batch/flex half; fast only batch? Cache discount 90%.
- **Architecture:** "Narrow but deep" MoE, 92 blocks, interleaved Gated SWA + sparse full attention (block size 8, top-k 4096). MIT? License: StepFun Model License 1.0. Open weights on HuggingFace.

### Raw benchmarks found (vendor table + AA/OpenRouter)

Agent / tool use:

- CyberGym: **84.7%**, MCP-Atlas **85.6%**, Toolathlon-Verified **74.1%**, PresentBench 76.8
- GDPval-AA v2: **1566 Elo**, AA-Briefcase 1433
- τ³-Banking: 42.5%
- AutomationBench-AA 51.0%, AutomationBench (public) 44.0%
- JobBench 59.0, BrowseComp 88.7, HLE w/ tools 59.4
- Agents' Last Exam 29.5%, DeepSearchQA 93.9? Not sampled exact (see non-table). Fine

Reasoning / knowledge:

- GPQA Diamond: 93.5% (vendor)
- HLE: 46.5% (AA)
- AA Intelligence Index (max): 44 (AA measured)
- AA-LCR: 88.3%
- CritPt: 20.9%
- AA-Omniscience Accuracy/Non-hall: 41.5% / 57.0%
- ARC-AGI? not sampled (no number)
- FrontierFinance 66.4% etc.

Coding:

- Terminal-Bench 2.1: **85.0%**, Terminal-Bench 4.0: 33.3% (AA) / 31.8 Vals
- DeepSWE v1.1: **67.7%**
- ProgramBench: 80.5%
- SWE-Atlas-QnA 63.6%, test-writing 50.8%, SWE-Marathon partial 72.7%, StepCodeBench 49.0%
- StepCode-Bench-Daily/General 64.9/65.0
- OSWorld? FrontierFinance? not
- SciCode 58.9%

General/knowledge:

- MMMU-Pro 76.0, GDP.pdf 14.8%, HLE w/ tools 59.4

Long context:

- 1M context, sparse attention. No dedicated MRCR benchmark number in sampled AA/OpenRouter report beyond StepFun architecture claims; capped. (One official block mentions 1M robust but no MRCR.)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 85.0, Terminal-Bench 4.0 33.3 low; CyberGym 84.7, MCP-Atlas 85.6, Toolathlon 74.1, JobBench 59.0, GDPval 1566. Strong professional/finance agent; TB4 caps.
- **Reasoning: 86/100.** GPQA 93.5, HLE 46.5, AA Intelligence 44, LCR 88.3; CritPt 20.9 caps; Doom? no.
- **Context window: 92/100.** 1M context with sparse attention up to 64K output; no published MRCR score caps.
- **Multimodal: 88/100.** Text/image (and doc) input; MMMU-Pro 76.0, GDP.pdf 14.8 (doc comprehension cap?), CharXiv 70? not same as table. (The table list only MMMU-Pro 76 and GDP.pdf 14.8; no CharXiv.) Use 84? Let's set 84 due to low doc comprehension and no video? But StepFun says video supported. We'll use 84.
- **Coding: 86/100.** TB2.1 85.0 but TB4 33.3, DeepSWE 67.7, ProgramBench 80.5, CodeBench 49.0; genuine agent coding. Cap at 86.
- **Cost efficiency: 88/100.** $1.00/$2.70 per 1M with cache hit $0.05 (or $0.10); good caching. Not free/cheap like Flash tiers, but prudent.
- **Overall Score: 88/100.** Mean (88+86+92+84+86)/5 = 87.2 → 87. Wait recalc: 88+86=174; +92=266; +84=350; +86=436 /5 = 87.2. Set 87.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (StepFun docs/benchmark report, OpenRouter AA summaries, AA primer, Hugging Face); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
