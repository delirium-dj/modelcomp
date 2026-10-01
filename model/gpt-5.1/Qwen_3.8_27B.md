# GPT-5.1 — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5.1, e.g. OpenCode Zen `opencode/gpt-5.1`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's flagship API model for coding and agentic tasks with adaptive (configurable) reasoning, released 2025-11-13; the "Thinking" half of the GPT-5.1 ChatGPT generation, now superseded in the lineup by GPT-5.2 (AA marks GPT-5.1 deprecated).
- **Provider / access:** OpenAI API — Chat Completions, Responses, and Batch endpoints. `reasoning.effort`: none (default), low, medium, high.
- **Release / knowledge:** released Nov 13, 2025 (default snapshot `gpt-5.1-2025-11-13`); knowledge cutoff Sep 30, 2024 (OpenAI docs + Artificial Analysis, verified).
- **IDs:** `gpt-5.1` (alias) / `gpt-5.1-2025-11-13` (snapshot); sibling chat model `gpt-5.1-chat-latest`. No Free ID — scored on paid pricing.
- **Context window:** 400,000 total — up to 272,000 input + 128,000 reasoning/output (OpenAI docs; AA lists 272k input).
- **Modalities:** text + image in, text out; reasoning tokens, tool calls (function calling, web search, file search, code interpreter, image generation, apply_patch, MCP), structured outputs, prompt caching.
- **Pricing (as of 2026-10-01):** $1.25 / $10 per 1M input/output tokens; cached input $0.125/1M (90% discount); Batch API supported.
- **Architecture:** proprietary, parameter count undisclosed.

### Raw benchmarks found

All below: GPT-5.1 Thinking at maximum available reasoning effort (high), from the "Introducing GPT-5.2" post (Dec 11, 2025) detailed-benchmark appendix, which reports GPT-5.1 Thinking as the comparison column; specs from OpenAI docs and Artificial Analysis.

Agent / tool use:

- Tau2-bench Telecom: **95.6%**
- Tau2-bench Retail: **77.9%**
- BrowseComp (agent browsing): **50.8%**
- Scale MCP-Atlas: **44.5%**
- Toolathon: **36.1%**
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public GPT-5.1 score found (the GPT-5.2 post's comparison column shows the GPT-5 reference value 38.8% instead)
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2025 (no tools): **94.0%**
- HMMT Feb 2025 (no tools): **96.3%**
- GPQA Diamond (no tools): **88.1%**
- HLE (no tools): **25.7%**; HLE (w/ search + Python): **42.7%**
- FrontierMath Tier 1–3 (w/ Python): **31.0%**; Tier 4: **12.5%**
- MMMLU: **89.5%**
- ARC-AGI-1 (Verified): **72.8%**; ARC-AGI-2 (Verified): **17.6%**
- Artificial Analysis Intelligence Index: **25** (independent estimate, below the median of 26 for its price tier; rank #122/224, AA page)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **76.3%**
- SWE-Bench Pro (public): **50.8%**
- SWE-Lancer IC Diamond: **69.7%** (OpenAI reports this as a $ value in that post's table)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- OpenAI MRCRv2 8-needle: 65.3% (4k–8k), 47.8% (8k–16k), 44.0% (16k–32k), 37.8% (32k–64k), 36.0% (64k–128k), 29.6% (128k–256k)
- BrowseComp Long Context: **90.0%** @128k, **89.5%** @256k
- GraphWalks bfs <128k: **76.8%**; parents <128k: **71.5%**

Multimodal (raw, for traceability):

- CharXiv reasoning: **67.0%** (no tools), **80.3%** (w/ Python)
- MMMU-Pro: **79.0%** (w/ Python)
- VideoMMMU (no tools): **82.9%**
- ScreenSpot-Pro (w/ Python): **64.2%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2-bench Telecom 95.6% and Retail 77.9% are strong, well above the mid band, but the broader agentic picture is uneven — BrowseComp 50.8%, MCP-Atlas 44.5% and Toolathon 36.1% show the gap versus 2026 leaders — so it lands high-mid rather than top.
- **Reasoning: 72/100.** Excellent competition math (AIME 94.0%, HMMT 96.3%) and solid GPQA 88.1%, but HLE 25.7% (no tools) and FrontierMath 31.0%/12.5% sit below the then-frontier, and the Sep 2024 knowledge cutoff plus a below-median AA Intelligence Index (25 vs median 26) keep it high-mid by late-2026 standards.
- **Context window: 74/100.** 400K total maps into the 200K–500K band; BrowseComp-Long ~90% at both 128k/256k is excellent, but MRCRv2 8-needle retrieval decays to 29.6% at 128k–256k, which drags it below the top of the band.
- **Multimodal: 80/100.** Text + image in with verified video understanding (VideoMMMU 82.9%, no tools) and strong chart/interface reasoning (CharXiv 80.3% w/ Python, ScreenSpot-Pro 64.2% w/ Python) — solidly in the +video band, output stays text-only.
- **Coding: 76/100.** SWE-bench Verified 76.3% and SWE-Bench Pro 50.8% were genuinely strong at release (flagship for coding/agentic work), and SWE-Lancer 69.7% confirms it; by 2026 it is one step behind GPT-5.2 (80.0%/55.6%) and far behind the GPT-6 generation, so high but not top.
- **Cost efficiency: 70/100.** $1.25/$10 per 1M with a 90% cache discount sits below the ~$3/$15 (≈60) anchor — cheaper than frontier-class peers and "reasonably priced" per AA, though far from the cheap-tier anchors; GPT-5.2's post even notes GPT-5.2's higher per-token price is offset by better token efficiency on agentic evals.
- **Overall Score: 74.8/100.** Mean of the five non-cost dims (72+72+74+80+76)/5 = 74.8 — a capable 2025-generation flagship for coding and tool-heavy agentic work, now overtaken by GPT-5.2/GPT-6.1 successors but still competitive at its price point.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.1 docs model page, "GPT-5.1: A smarter, more conversational ChatGPT" post Nov 12 2025, GPT-5.1 system-card addendum, and the "Introducing GPT-5.2" detailed-benchmark appendix which carries the GPT-5.1 Thinking comparison column, plus Artificial Analysis GPT-5.1 page — all fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
