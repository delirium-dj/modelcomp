# Gemini 3.5 Flash — findings by Qwen 3.7 Plus

- Source: Google/Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-gen Flash model released at Google I/O on May 19, 2026. Positioned as "Pro-level reasoning at Flash-class latency." Scores 55 on the Artificial Analysis Intelligence Index (rank #7 of 147), up 9 points from Gemini 3 Flash. The clear leader on the intelligence-vs-speed Pareto frontier at 278 output tokens/s — ~4× faster than other frontier models. Excels at agentic tasks (MCP Atlas 83.6%, Finance Agent v2 57.9%) and multimodal understanding (MMMU-Pro 83.6%, CharXiv 84.2%). Has a free tier on Google AI Studio. Successor Gemini 3.5 Flash-Lite and 3.6 Flash followed in July 2026.
- **Provider / access:** Google AI Studio; Gemini API; Google Antigravity; Gemini Enterprise; OpenRouter. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits.
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.5-flash` (Google AI Studio). Free tier available.
- **Context window:** 1,048,576 tokens (1M) total; 64,000 max output.
- **Modalities:** Text, image, audio, video, and PDF in; text out. Multimodal support is a key advantage over text+image-only competitors. Function calling, structured output, code execution, and search-as-a-tool are first-party.
- **Pricing (as of 2026-10-10):** $1.50 in / $9.00 out per 1M tokens. Cached input: $0.15/M (90% discount). 3× the price of Gemini 3 Flash ($0.50/$3.00). 25% cheaper than Gemini 3.1 Pro ($2.00/$12.00) per token. Free tier available with rate limits.
- **Architecture:** Proprietary. Based on Gemini 3 Flash reasoning foundation with explicit thinking levels (low/medium/high). Speed-optimized: 278 output tokens/s. Higher token verbosity (73M tokens for AA Intelligence Index suite vs. 36M average).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%** (Google; vs Gemini 3.1 Pro's 78.2%, Claude Opus 4.7's 79.1%, GPT-5.5's 75.3% — highest Google has published)
- Toolathlon-Verified: **56.5%** (Google; vs GPT-5.5's 55.6%)
- GDPval-AA (Elo): **1656** (Google; vs Gemini 3 Flash's 1204, Gemini 3.1 Pro's 1314; just behind GPT-5.4's 1674)
- Finance Agent v2: **57.9%** (Google; vs Claude Sonnet 4.6's 51.0%, Claude Opus 4.7's 51.5%, GPT-5.5's 51.8%)
- OSWorld-Verified: **78.4%** (Google; vs Gemini 3.1 Pro's 76.2%, Claude Opus 4.7's 78.0%, GPT-5.5's 78.7%)
- Tau2-Bench Telecom: strong improvement over Gemini 3 Flash (exact score not published in sources)

Reasoning / knowledge:

- HLE (Humanity's Last Exam, full set): **40.2%** (Google; vs Gemini 3.1 Pro's 44.4%, Claude Opus 4.7's 46.9%, GPT-5.5's 41.4%)
- ARC-AGI-2: **72.1%** (Google; vs Gemini 3.1 Pro's 77.1%, Claude Opus 4.7's 75.8%, GPT-5.5's 84.6%)
- GPQA Diamond: **92.8%** (respan.ai)
- AA-Omniscience Hallucination Rate: **61%** (down 31 points from Gemini 3 Flash's 92% — major improvement)
- AA Intelligence Index: **55.3** (rank #7 of 147; vs Gemini 3 Flash's 46, Gemini 3.1 Pro's 57.2)

Coding:

- Terminal-Bench 2.1: **76.2%** (Google; vs Gemini 3 Flash's 58.0%, Gemini 3.1 Pro's 70.3%; vs GPT-5.5's 78.2%)
- SWE-Bench Pro (Public, single attempt): **55.1%** (Google; vs Gemini 3 Flash's 49.6%, Gemini 3.1 Pro's 54.2%; vs Claude Opus 4.7's 64.3%, GPT-5.5's 58.6%)
- Appwrite Arena (with Skills): **96.2%** overall (fastest top-tier model at 20 min)
- Appwrite Arena (without Skills): **90.7%** overall

Multimodal:

- CharXiv Reasoning (no tools): **84.2%** (Google; vs GPT-5.5's 84.1%, Claude Opus 4.7's 82.1%)
- MMMU-Pro (no tools): **83.6%** (Google; highest recorded; vs GPT-5.5's 81.2%, Claude Opus 4.7's 75.2%)
- Blueprint-Bench 2: **33.6%** (Google; vs GPT-5.5's 36.2%)

Long context:

- MRCR v2 (8-needle, 128K average): **77.3%** (Google; vs Gemini 3.1 Pro's 84.9%, GPT-5.5's 94.8%)
- MRCR v2 (1M, pointwise): **26.6%** (Google; vs Gemini 3 Flash's 22.1%)

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 83.6% is the highest published by Google and leads Claude Opus 4.7 (79.1%) and GPT-5.5 (75.3%). Finance Agent v2 57.9% leads ALL competitors including Claude Sonnet 4.6 (51.0%) and GPT-5.5 (51.8%). Toolathlon 56.5% leads GPT-5.5 (55.6%). OSWorld 78.4% is competitive. GDPval-AA 1656 Elo is strong, just behind GPT-5.4 (1674). A leading agentic model, particularly strong on MCP-based tool orchestration and financial agent tasks.
- **Reasoning: 78/100.** HLE 40.2% is moderate (trails Gemini 3.1 Pro's 44.4% and GPT-5.5's 41.4%). ARC-AGI-2 72.1% trails Gemini 3.1 Pro (77.1%) and GPT-5.5 (84.6%) significantly — a clear weakness on abstract reasoning. GPQA Diamond 92.8% is competitive. AA Intelligence Index 55.3 is strong (#7 globally) but trails Gemini 3.1 Pro (57.2). Hallucination rate 61% is a major improvement (−31 pts from Gemini 3 Flash) but still relatively high. The reasoning profile is the weakest dimension: strong on agentic knowledge work but below par on academic/abstract reasoning.
- **Context window: 82/100.** 1M-token context with 64K max output (smaller output cap than competitors at 128K). MRCR v2 at 128K is 77.3% — decent but trails Gemini 3.1 Pro (84.9%) and GPT-5.5 (94.8%). At 1M pointwise, 26.6% is low. The context window is usable but retrieval accuracy at long range is not best-in-class. The 64K output cap is limiting for complex document generation.
- **Multimodal: 89/100.** Text, image, audio, video, AND PDF input — the most complete input modality set alongside MiMo V2.6 Pro. MMMU-Pro 83.6% is the highest recorded. CharXiv 84.2% leads GPT-5.5 (84.1%). Blueprint-Bench 33.6% is competitive. The multimodal performance is a key differentiator, especially for document/video/audio processing pipelines.
- **Coding: 82/100.** Terminal-Bench 2.1 at 76.2% is strong (up from Gemini 3 Flash's 58.0%). SWE-Bench Pro 55.1% is competitive but trails Claude Opus 4.7 (64.3%) and GPT-5.5 (58.6%). Appwrite Arena 96.2% (with Skills) is excellent for SDK-level coding. The coding performance is solid for a Flash-tier model but not frontier-leading — it's optimized for speed and iteration volume over per-response correctness.
- **Cost efficiency: 88/100.** $1.50/$9.00 per 1M tokens is 25% cheaper than Gemini 3.1 Pro per token. Free tier available. Cached input at $0.15/M (90% off) is very competitive. At 278 tok/s, it's the fastest frontier model — 4× faster than GPT-5.5 and Claude Opus 4.7. However, total eval cost is $1,552 for AA Intelligence Index (5.5× Gemini 3 Flash, 75% more than Gemini 3.1 Pro) due to high token verbosity (73M tokens). The speed and per-token pricing make it excellent for throughput-bound workloads, but the verbosity reduces the effective savings.
- **Overall Score: 84/100.** Mean of five quality dims: (88 + 78 + 82 + 89 + 82) / 5 = 83.8. The clear leader in intelligence-vs-speed: AA Intelligence Index 55.3 at 278 tok/s is unmatched by any model in the same intelligence bracket. Best fit for throughput-bound agentic pipelines, MCP-based tool orchestration (MCP Atlas 83.6%), multimodal document processing (MMMU-Pro 83.6%), and cost-sensitive deployments needing frontier-competitive performance at Flash-class latency. The free tier, 90% cache discount, and 25% discount vs. Gemini 3.1 Pro make it accessible. Key weaknesses: abstract reasoning (ARC-AGI-2 72.1%), long-context retrieval at 1M (26.6%), and 64K output cap. Successor models (3.5 Flash-Lite, 3.6 Flash, 3.8 Flash) have since surpassed it.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official announcements, Artificial Analysis, Appwrite Arena, BenchLM, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
