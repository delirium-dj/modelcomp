# GPT-5.5 Pro — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.5 Pro (`opencode/gpt-5.5-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5 for deep reasoning on high-stakes research, math, and expert QA. Released April 23, 2026, alongside GPT-5.5 standard. Same first-fully-retrained base (codename "Spud"), but with extended compute for higher accuracy. Delivers state-of-the-art math performance (FrontierMath T4: 39.6%, nearly double Claude Opus 4.7's 22.9%) and BrowseComp 90.1%. Priced at $30/$180 per 1M tokens — 6× the standard GPT-5.5 — targeting legal research, data science, and advanced analytics where accuracy is paramount.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`); ChatGPT Pro, Business, Enterprise. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not officially disclosed (GPT-5.4 was August 31, 2025).
- **IDs:** `opencode/gpt-5.5-pro` (OpenAI API). No free OpenCode Zen ID.
- **Context window:** ~922,000–1,050,000 tokens total; 128,000 max output.
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking / chain-of-thought; effort levels: low/medium/high/xhigh/max). Tool calls supported.
- **Pricing (as of 2026-10-10):** $30 in / $180 out per 1M tokens. Batch: $10/$45 (67% off). 6× the price of GPT-5.5 standard ($5/$30). Reasoning tokens count against context and output billing.
- **Architecture:** Proprietary; parameter count not disclosed. First fully retrained base model since GPT-4.5. Co-designed for NVIDIA GB200/GB300 NVL72 systems. Pro variant adds extended compute for deeper reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI; standard GPT-5.5; state-of-the-art at release; vs Opus 4.7's 69.4%)
- Terminal-Bench 2.1: **78.2%** (CodingFleet; vs Opus 4.8's 74.6%)
- GDPval (44 occupations): **84.9%** (OpenAI; vs Opus 4.7's 80.3%)
- OSWorld-Verified: **78.7%** (OpenAI; vs Opus 4.7's 78.0%)
- MCP-Atlas: **75.3%** (OpenAI; vs Opus 4.7's 79.1%)
- Toolathlon: **55.6%** (OpenAI)
- CyberGym: **81.8%** (OpenAI; vs Opus 4.8's 78.8%)

Reasoning / knowledge:

- FrontierMath Tier 4: **39.6%** (OpenAI; Pro xhigh; vs GPT-5.5 standard 35.4%, Opus 4.7's 22.9%, Gemini 3.1 Pro's 16.7% — nearly 2× the nearest competitor)
- FrontierMath T1–3: **52.4%** (Pro; vs standard 51.7%)
- HLE (no tools): **43.1%** (Pro; vs standard 41.4%, Opus 4.7's 46.9%)
- GPQA Diamond: **93.9%** (LM Council; Pro xhigh; vs standard 93.6%, Opus 4.8's 93.6%)
- ARC-AGI-2 (xHigh): **85.0%** standard / **84.6%** Pro (ARC Prize; vs Opus 4.8's 72.1%)
- OTIS Mock AIME 2024-25: **100.0%** (LM Council; Pro xhigh)
- BrowseComp: **90.1%** (Pro; vs Gemini 3.1 Pro's 85.9%)
- AA-Omniscience Accuracy: **57%** (highest ever recorded; Artificial Analysis)
- MMLU: **92.4%** (OpenAI)

Coding:

- SWE-bench Verified: **88.7%** (OpenAI; vs Opus 4.7's ~82%)
- SWE-bench Pro: **58.6%** (OpenAI; vs Opus 4.7's 64.3%, Opus 4.8's 69.2%)
- DeepSWE (3rd party, Datacurve June 2026): **70%** (vs Opus 4.8's 58%; GPT-5.5 costs $6.61/task vs Opus $12.58/task)
- LiveCodeBench: **~91.0%** (CodingFleet; vs Opus 4.8's 88.8%)
- Expert-SWE (20hr tasks): **73.1%** (OpenAI)
- AA Coding Index: **59.1** (vs Opus 4.7's 52.5)

Long context:

- MRCR v2 (512K–1M): **74.0%** (OpenAI; vs GPT-5.4's 36.6%, Opus 4.7's 32.2% — near-doubling)
- MRCR v2 (256K–512K): **81.5%** (vs GPT-5.4's 57.5%)
- MRCR v2 (128K–256K): **87.5%** (vs GPT-5.4's 79.3%)
- GraphWalks BFS 1M: **45.4%** (Artificial Analysis; vs Opus 4.8's 68.1%)
- GraphWalks BFS 256K: **73.7%** (vs Opus 4.8's 85.9%)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.0 at 82.7% was state-of-the-art at release. GDPval 84.9% across 44 occupations is excellent. OSWorld 78.7% is competitive. CyberGym 81.8% leads Opus 4.8. However, MCP-Atlas 75.3% trails Opus 4.7 (79.1%), and Toolathlon 55.6% is moderate. Strong agentic performer but not the leader on all tool-use benchmarks.
- **Reasoning: 91/100.** FrontierMath T4 at 39.6% (Pro) is the standout — nearly double Opus 4.7's 22.9% and more than double Gemini 3.1 Pro's 16.7%. This is the strongest math reasoning of any publicly available model. GPQA Diamond 93.9% is near-top. ARC-AGI-2 at 85.0% dominates (12.9 pts above Opus 4.8). OTIS Mock AIME 100% is perfect. BrowseComp 90.1% (Pro) leads all models. HLE 43.1% (Pro) trails Opus 4.7 (46.9%). AA-Omniscience accuracy 57% is highest ever, but 86% hallucination rate is a serious concern. The math/reasoning lead is exceptional; the hallucination problem prevents a higher score.
- **Context window: 85/100.** ~922K–1.05M tokens with 128K max output. MRCR v2 at 512K–1M is 74.0% — a near-doubling from GPT-5.4 and far better than Opus 4.7's 32.2%. However, GraphWalks BFS 1M at 45.4% trails Opus 4.8 (68.1%) by 22.7 points, showing weakness at the extreme end of long-context retrieval. The 16K–64K range shows a slight regression vs. GPT-5.4. Solid but not best-in-class for long-context retrieval accuracy.
- **Multimodal: 60/100.** Text and image in; text out. No audio, video, or PDF input natively (despite early "omnimodal" claims — actual API is text+image only). No audio/video output. Capped by limited input/output modalities compared to some competitors.
- **Coding: 88/100.** DeepSWE 70% leads ALL models including Opus 4.8 (58%) on this harder independent benchmark — while costing half and running 2× faster. LiveCodeBench ~91% is strong. SWE-bench Verified 88.7% is competitive. However, SWE-bench Pro 58.6% trails Opus 4.7 (64.3%) and Opus 4.8 (69.2%) by 6–11 points. Expert-SWE 73.1% is strong. The coding profile is split: dominant on independent/harder benchmarks (DeepSWE), but trailing on SWE-bench Pro. AA Coding Index 59.1 leads.
- **Cost efficiency: 35/100.** $30/$180 per 1M tokens is the most expensive pricing of any model in this dataset — 6× GPT-5.5 standard, 6× Claude Sonnet 5.5, 15× Gemini 3.8 Flash. Batch at $10/$45 provides some relief (67% off). The Pro tier's value proposition rests on higher accuracy for high-stakes tasks (math proofs, legal research, expert QA) where a single correct answer justifies the cost. For general-purpose workloads, the cost is prohibitive. The 40% token reduction vs. GPT-5.4 helps somewhat, but the raw per-token price dominates. DeepSWE shows $6.61/task for GPT-5.5 standard vs. $12.58 for Opus 4.8 — but Pro is 6× more expensive than standard.
- **Overall Score: 82/100.** Mean of five quality dims: (87 + 91 + 85 + 60 + 88) / 5 = 82.2. A premium reasoning specialist that leads all models on FrontierMath T4 (39.6%), BrowseComp (90.1%), and DeepSWE (70%), with perfect OTIS Mock AIME (100%). Best fit for high-stakes math, scientific research, expert QA, and legal analysis where accuracy justifies the 6× price premium over standard GPT-5.5. The extreme cost, 86% hallucination rate, and SWE-bench Pro gap vs. Claude are significant trade-offs. Successor models (GPT-5.6, GPT-6 family) have since surpassed it on most dimensions.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcements, Artificial Analysis, CodingFleet, O-mega, Kingy AI, LM Council, Nexos AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
