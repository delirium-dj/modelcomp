# GPT-5.2 — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5.2, e.g. OpenCode Zen `opencode/gpt-5.2`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's flagship model for professional knowledge work and long-running agents (Dec 2025 release); OpenAI now labels it the "previous flagship" behind GPT-6 Astra.
- **Provider / access:** OpenAI API — Chat Completions, Responses, and Batch endpoints. `reasoning.effort`: none (default), low, medium, high, and xhigh (xhigh introduced here).
- **Release / knowledge:** released 2025-12-11 (default snapshot `gpt-5.2-2025-12-11`); knowledge cutoff Aug 31, 2025 (OpenAI docs, verified).
- **IDs:** `gpt-5.2` (alias) / `gpt-5.2-2025-12-11` (snapshot); siblings `gpt-5.2-chat-latest` and `gpt-5.2-pro` ($21/$168 per 1M). No Free ID — scored on paid pricing.
- **Context window:** 400,000 total — up to 272,000 input + 128,000 reasoning/output (OpenAI docs).
- **Modalities:** text + image in, text out; reasoning tokens, tool calls (function calling, web search, file search, code interpreter, hosted shell, apply_patch, skills, MCP), structured outputs, prompt caching, `/compact` endpoint for long workflows.
- **Pricing (as of 2026-10-01):** $1.75 / $14 per 1M input/output tokens; cached input $0.175/1M (90% discount); Batch API supported.
- **Architecture:** proprietary, parameter count undisclosed.

### Raw benchmarks found

All below: GPT-5.2 Thinking at maximum reasoning effort (xhigh), from the "Introducing GPT-5.2" post (Dec 11, 2025) and its detailed-benchmark appendix; specs from OpenAI docs.

Agent / tool use:

- Tau2-bench Telecom: **98.7%** (new SOTA at release)
- Tau2-bench Retail: **82.0%**
- BrowseComp (agent browsing): **65.8%**
- Scale MCP-Atlas: **60.6%**
- Toolathon: **46.3%**
- GDPval (wins or ties, 44 occupations): **70.9%** — first OpenAI model at/above human expert level; clear wins 49.8%, no ties 61.0%
- Terminal-Bench 2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2025 (no tools): **100.0%**
- HMMT Feb 2025 (no tools): **99.4%**
- GPQA Diamond (no tools): **92.4%**
- HLE (no tools): **34.5%**; HLE (w/ search + Python): **45.5%**
- FrontierMath Tier 1–3 (w/ Python): **40.3%**; Tier 4: **14.6%**
- MMMLU: **89.6%**
- ARC-AGI-1 (Verified): **86.2%**; ARC-AGI-2 (Verified): **52.9%** (new SOTA for chain-of-thought models)
- ChatGPT answers without errors: **93.9%** (w/ search), **88.0%** (no search) — 30% rel fewer errors than GPT-5.1
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.0%**
- SWE-Bench Pro (public): **55.6%** (new SOTA at release)
- SWE-Lancer IC Diamond: **74.6%**
- Investment banking spreadsheet tasks (internal): **68.4%**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- OpenAI MRCRv2 8-needle: 98.2% (4k–8k), 89.3% (8k–16k), 95.3% (16k–32k), 92.0% (32k–64k), 85.6% (64k–128k), 77.0% (128k–256k) — near-100% on 4-needle variant out to 256k
- BrowseComp Long Context: **92.0%** @128k, **89.8%** @256k
- GraphWalks bfs <128k: **94.0%**; parents <128k: **89.0%**

Multimodal (raw, for traceability):

- CharXiv reasoning: **82.1%** (no tools), **88.7%** (w/ Python)
- MMMU-Pro: **79.5%** (no tools), **80.4%** (w/ Python)
- VideoMMMU (no tools): **85.9%**
- ScreenSpot-Pro (w/ Python): **86.3%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2-bench Telecom 98.7% (SOTA at release) and Retail 82.0% are near-ceiling, MCP-Atlas 60.6% and BrowseComp 65.8% are strong, and GDPval 70.9% win-or-tie made it the first OpenAI model at expert level on real knowledge work — clearly top-tier even though Toolathon (46.3%) shows the hardest workflows still drop.
- **Reasoning: 80/100.** AIME 100%, HMMT 99.4%, GPQA 92.4%, ARC-AGI-2 52.9% (CoT SOTA) and HLE 34.5%→45.5% with tools place it at the 2025 frontier; by late-2026 the GPT-6 generation has moved past it, so top of the GPT-5 era rather than absolute ceiling.
- **Context window: 82/100.** 400K total with genuinely measured excellence: MRCRv2 77–98% across the full range, BrowseComp-Long 92.0%/89.8%, GraphWalks 94.0%/89.0% — the best long-context retrieval profile in the GPT-5 family, high in the 200K–500K band.
- **Multimodal: 84/100.** Text + image in with verified, strong video and interface understanding (VideoMMMU 85.9%, ScreenSpot-Pro 86.3%, CharXiv 88.7% w/ Python, MMMU-Pro 80.4%) — upper end of the +video band; output stays text-only.
- **Coding: 82/100.** SWE-bench Verified 80.0% and SWE-Bench Pro 55.6% were SOTA at release, SWE-Lancer 74.6% and the 68.4% IB-spreadsheet score confirm agentic coding depth — top-tier for 2025, slightly behind GPT-6.1-era models in 2026.
- **Cost efficiency: 56/100.** $1.75/$14 per 1M is pricier than the $3/$15-class anchor of earlier flagships relative to capability; OpenAI itself notes the higher per-token price is offset by token efficiency on agentic evals ("cost of attaining a given level of quality ended up less expensive").
- **Overall Score: 82.0/100.** Mean of the five non-cost dims (82+80+82+84+82)/5 = 82.0 — the professional-work flagship of late 2025: SOTA tool calling and long context, expert-level knowledge work, at the cost of frontier-tier pricing.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.2 docs model page and the "Introducing GPT-5.2" post with detailed-benchmark appendix, both fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
