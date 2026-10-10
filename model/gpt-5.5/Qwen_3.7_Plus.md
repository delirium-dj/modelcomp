# GPT-5.5 — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.5 (`openai/gpt-5.5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's first fully retrained base model since GPT-4.5, released April 23, 2026 (codename "Spud"). Not a post-training iteration — new architecture, pretraining corpus, and agent-oriented objectives. State-of-the-art on Terminal-Bench 2.0 (82.7%) and GDPval (84.9%). Topped the Artificial Analysis Intelligence Index at launch (60.2 xhigh). Uses ~40% fewer tokens than GPT-5.4 for equivalent tasks while matching per-token latency. Available in standard ($5/$30) and Pro ($30/$180) variants. Successor models (GPT-5.6, GPT-6 family) have since surpassed it.
- **Provider / access:** OpenAI API (`gpt-5.5`); ChatGPT Plus, Pro, Business, Enterprise; Codex. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not officially disclosed (GPT-5.4 was August 31, 2025).
- **IDs:** `openai/gpt-5.5` (OpenAI API). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 128,000 max output. 400K in Codex.
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking / chain-of-thought; effort levels: low/medium/high/xhigh/max). Tool calls supported. Natively omnimodal architecture (text, images, audio, video in unified model) but API is text+image only.
- **Pricing (as of 2026-10-10):** $5 in / $30 out per 1M tokens. Batch/Flex: $2.50/$15 (50% off). Priority: 2.5× ($12.50/$75). Fast mode: 1.5× speed at 2.5× cost. 2× the price of GPT-5.4 ($2.50/$15) but ~40% fewer tokens per task.
- **Architecture:** Proprietary; parameter count not disclosed. First fully retrained base since GPT-4.5. Co-designed for NVIDIA GB200/GB300 NVL72 systems. Helped optimize its own serving infrastructure (20%+ token generation speed increase).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI; state-of-the-art at release; vs GPT-5.4's 75.1%, Opus 4.7's 69.4%, Gemini 3.1 Pro's 68.5%)
- Terminal-Bench 2.1: **78.2%** (CodingFleet; vs Opus 4.8's 74.6%)
- GDPval (44 occupations): **84.9%** (OpenAI; vs Opus 4.7's 80.3%)
- OSWorld-Verified: **78.7%** (OpenAI; vs GPT-5.4's 75.0%, Opus 4.7's 78.0%)
- MCP-Atlas: **75.3%** (OpenAI; vs Opus 4.7's 79.1%)
- Toolathlon: **55.6%** (OpenAI; vs GPT-5.4's 54.6%)
- CyberGym: **81.8%** (OpenAI; vs Opus 4.8's 78.8%)
- GDPval-AA (Elo): **1769** (CodingFleet; vs Opus 4.8's 1890)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI; vs Opus 4.7's 92.8%, Gemini 3.1 Pro's 94.3%)
- ARC-AGI-2 (xHigh): **85.0%** (OpenAI; vs GPT-5.4's 73.3% — 11.7 pt jump, largest single-gen improvement)
- ARC-AGI-1: **95.0%** (OpenAI)
- HLE (no tools): **41.4%** (OpenAI; vs Opus 4.7's 46.9%)
- HLE (with tools): **52.2%** (OpenAI; vs Opus 4.7's 54.7%)
- FrontierMath T1–3: **51.7%** (OpenAI; vs Opus 4.7's 43.8%)
- FrontierMath T4: **35.4%** (OpenAI; vs Opus 4.7's 22.9%)
- MMLU: **92.4%** (OpenAI)
- AA-Omniscience Accuracy: **57%** (highest ever recorded; Artificial Analysis)
- AA-Omniscience Hallucination Rate: **86%** (worst of any flagship; Artificial Analysis)
- AA Intelligence Index: **60.2** (xhigh; #1 at launch; CodingFleet: 58.9 high)

Coding:

- SWE-bench Verified: **88.7%** (OpenAI; vs GPT-5.4's 74.9%, Opus 4.7's ~82%)
- SWE-bench Pro: **58.6%** (OpenAI; vs Opus 4.7's 64.3%, Opus 4.8's 69.2%)
- DeepSWE (Datacurve, June 2026): **70%** (vs Opus 4.8's 58%; $6.61/task vs Opus $12.58/task — half cost, 2× faster)
- LiveCodeBench: **~91.0%** (CodingFleet; vs Opus 4.8's 88.8%)
- Expert-SWE (20hr tasks): **73.1%** (OpenAI)
- AA Coding Index: **59.1** (vs Opus 4.7's 52.5)
- Capture-the-Flags: **88.1%** (OpenAI)
- Cyber Range: **93.3%** (14/15 scenarios)

Long context:

- MRCR v2 (512K–1M): **74.0%** (OpenAI; vs GPT-5.4's 36.6%, Opus 4.7's 32.2% — near-doubling)
- MRCR v2 (256K–512K): **81.5%** (vs GPT-5.4's 57.5%)
- MRCR v2 (128K–256K): **87.5%** (vs GPT-5.4's 79.3%)
- MRCR v2 (4K–8K): **98.1%** (vs GPT-5.4's 97.3%)
- GraphWalks BFS 1M: **45.4%** (Artificial Analysis; vs Opus 4.8's 68.1%)
- GraphWalks BFS 256K: **73.7%** (vs Opus 4.8's 85.9%)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.0 at 82.7% was state-of-the-art at release (13 pts above Opus 4.7's 69.4%). GDPval 84.9% across 44 occupations leads Opus 4.7 (80.3%). CyberGym 81.8% and Cyber Range 93.3% demonstrate strong cybersecurity capability. OSWorld 78.7% is competitive. However, MCP-Atlas 75.3% trails Opus 4.7 (79.1%) — a weakness in multi-tool orchestration. GDPval-AA 1769 Elo trails Opus 4.8 (1890). Strong agentic performer, particularly for terminal/CLI workflows and cybersecurity.
- **Reasoning: 89/100.** GPQA Diamond 93.6% is near-top. ARC-AGI-2 85.0% dominates (12.9 pts above Opus 4.8's 72.1%) — the largest single-generation improvement on abstract reasoning. FrontierMath T4 35.4% leads Opus 4.7 (22.9%) by 12.5 pts. MMLU 92.4% is strong. AA-Omniscience accuracy 57% is highest ever. However, HLE 41.4% (no tools) trails Opus 4.7 (46.9%) by 5.5 pts. The 86% hallucination rate is the worst of any flagship — when it doesn't know, it fabricates. Strong raw reasoning held back by poor calibration.
- **Context window: 86/100.** 1M-token context with 128K max output. MRCR v2 at 512K–1M is 74.0% — a near-doubling from GPT-5.4 (36.6%) and far better than Opus 4.7 (32.2%). First OpenAI model where the 1M window is genuinely usable. However, GraphWalks BFS 1M at 45.4% trails Opus 4.8 (68.1%) by 22.7 pts. The 16K–64K range shows slight regression vs. GPT-5.4. 400K default in Codex. Solid but not best-in-class for extreme long-context retrieval.
- **Multimodal: 60/100.** Text and image in; text out via API. Despite "natively omnimodal" architecture (unified model handles text, images, audio, video), the API exposes only text+image input. No audio/video/PDF input via API. No audio/video output. Capped by limited API modalities compared to Gemini and MiMo models.
- **Coding: 89/100.** DeepSWE 70% leads ALL models on this independent benchmark (vs Opus 4.8's 58%) while costing half and running 2× faster. Terminal-Bench 2.0 at 82.7% was state-of-the-art. SWE-bench Verified 88.7% is competitive. LiveCodeBench ~91% is strong. Expert-SWE 73.1% for 20-hour tasks is excellent. However, SWE-bench Pro 58.6% trails Opus 4.7 (64.3%) and Opus 4.8 (69.2%) by 6–11 pts. Cyber Range 93.3% and CTF 88.1% demonstrate strong cybersecurity coding. The coding profile is dominant on independent/harder benchmarks but trails on SWE-bench Pro.
- **Cost efficiency: 72/100.** $5/$30 per 1M tokens is 2× GPT-5.4's price but with ~40% fewer tokens per task (making effective cost ~1.2× for equivalent work). Batch/Flex at 50% off ($2.50/$15) is competitive for async workloads. DeepSWE shows $6.61/task vs Opus 4.8's $12.58 — half the cost with better results. 30% fewer turns than Opus 4.8 on agentic tasks. The token efficiency argument is valid but the raw per-token pricing is still high. Artificial Analysis notes GPT-5.5 (medium) scores the same as Opus 4.7 (max) at one quarter the cost.
- **Overall Score: 82.8/100.** Mean of five quality dims: (90 + 89 + 86 + 60 + 89) / 5 = 82.8. A landmark release: the first fully retrained base since GPT-4.5, setting new state-of-the-art on Terminal-Bench 2.0 (82.7%), GDPval (84.9%), and ARC-AGI-2 (85.0%). The token efficiency breakthrough (~40% fewer tokens per task) and DeepSWE leadership (70%) make it the most cost-effective frontier model for agentic coding workflows. Best fit for terminal/CLI automation, agentic coding pipelines, cybersecurity tasks, and abstract reasoning workloads. Key weaknesses: 86% hallucination rate (worst of any flagship), SWE-bench Pro gap vs. Claude, and limited API modalities. The multimodal limitation and hallucination problem prevent a higher score. Successor models (GPT-5.6, GPT-6 family) have since surpassed it on most dimensions.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcements, Artificial Analysis, CodingFleet, O-mega, Miraflow, Nexos AI, Kingy AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
