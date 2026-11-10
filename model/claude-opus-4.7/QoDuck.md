# Claude Opus 4.7 — findings by QoDuck

- Source: Anthropic / Claude Opus 4.7 (`claude-opus-4-7`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's frontier reasoning + agentic-coding model released 2026-04-16, successor to Opus 4.6. Led GDPval-AA and SWE-bench Pro at launch and introduced an enhanced high-resolution vision stack and a new `xhigh` effort level. Now **deprecated** (superseded by Claude Opus 4.8, released 2026-05-28).
- **Provider / access:** Anthropic API `claude-opus-4-7`; AWS Bedrock `anthropic.claude-opus-4-7-v1:0`; Google Vertex `claude-opus-4-7@20260416`. Messages API (tool use + extended thinking); available from 4 providers per Artificial Analysis. Okou and other resellers have dropped it (reference-only).
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff **January 2026** (corroborated by AA + morphllm).
- **IDs:** `claude-opus-4-7` (Anthropic); `anthropic.claude-opus-4-7-v1:0` (Bedrock); `claude-opus-4-7@20260416` (Vertex).
- **Context window:** 1,000,000 tokens (1M) at standard pricing across the full window (verified via Anthropic + computingforgeeks + AA). Max output not stated by the provider for this exact model.
- **Modalities:** Text + image **input** (vision up to 2,576 px long edge / ~3.75 MP, ~3× prior Claude; optional downsampling), PDF/document input; **text-only output**. No audio/video. Reasoning: yes (new `xhigh` effort between `high` and `max`; Claude Code default raised to xhigh). Tool calls: yes. New tokenizer maps the same text to ~1.0–1.35× more tokens than 4.6.
- **Pricing (as of 2026-11-10):** $5 / 1M input, $25 / 1M output (unchanged from 4.6); $0.50 / 1M cache hit (90% discount), $6.25 / 1M cache write; blended ~$3.85 / 1M (AA). Fast mode $30 / $150 (later dropped to $10/$50 for Opus 4.8).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Output speed ~78.19 tok/s, TTFT ~17.25s (AA current).

### Raw benchmarks found

> Vendor benchmark charts on the Anthropic announcement are images (no text values); the numbers below come from computingforgeeks + morphllm reproductions of Anthropic's table, the April 19 Weekly AI Model Digest, and Artificial Analysis (launch v4.x article snippets + current model page v5.0.1). Meta-style "no vendor numbers" does not apply here — Anthropic did publish a table, reproduced by independent outlets.

Agent / tool use:

- GDPval-AA: **1753 Elo** (#1) launch (Weekly Digest, +134 over Opus 4.6's 1619; AA's GPT-5.5 article corroborates Opus 4.7 max ≈1755, ~30 behind GPT-5.5 xhigh 1785) / **1361.69 Elo** current (AA model page, CI 1345.94–1377.43) — steep pool-relative decline after deprecation as newer models entered.
- Terminal-Bench 2.0: **69.4%** launch (computingforgeeks; 4.6 65.4%, GPT-5.4 75.1%, Gemini 3.1 Pro 68.5%). Terminal-Bench 2.1: **83.1%** current (AA, 0.83146) — **different task set** from 2.0 (morphllm caution), not a like-for-like gain. Terminal-Bench 4.0: **null** (no score).
- Tau2-Bench: **88.6%** current (AA, 0.885965). Tau-Banking: **34.6%** current (AA, 0.34639).
- MCP-Atlas: **77.3%** launch (computingforgeeks; 4.6 75.8%, GPT-5.4 68.1%, Gemini 3.1 Pro 73.9%).
- OSWorld-Verified: **78.0%** (computingforgeeks) / **82.3%** (morphllm) — conflicting runs; ~78–82% range.
- Finance Agent v1.1 (Vals AI): **64.4%** launch (computingforgeeks; poloapi snippet 64.37%; 4.6 60.1%, GPT-5.4 61.5%, Gemini 3.1 Pro 59.7%) — #1.
- AA-Briefcase: **1252.06 Elo** current (AA). AutomationBench-AA: no score (null).
- Claw-Eval / ClawProBench / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.2%** launch (computingforgeeks; 4.6 91.3%, GPT-5.4 94.4%, Gemini 3.1 Pro 94.3%) / **91.4%** current (AA, 0.91414) — vintage/harness difference.
- HLE: **54.7%** launch **with tools** (computingforgeeks; 4.6 53.3%, GPT-5.4 58.7%, Gemini 3.1 Pro 51.4%) / **42.3%** current (AA, 0.42308, likely no-tools subset) — harness difference, not a regression.
- Artificial Analysis Intelligence Index: **led at launch** (co-leader with GPT-5.4 and Gemini 3.1 Pro per AA/LinkedIn pulse; exact launch value not pinned in fetched text) / **N/A** current (AA model page — deprecated, headline Index withdrawn, components retained).
- CritPt (hard subset): **12%** current (AA, 0.12); critptAgenticHard null.
- AA-LCR: **78.7%** current (AA, 0.78667). MLCR: no verified public score found.
- SciCode: **null** (no score). Omniscience Accuracy / Hallucination Rate: **null** current (AA).
- CharXiv Reasoning (vision): **91.0%** launch (computingforgeeks; 4.6 84.7%). BigLaw Bench (Harvey): **90.9%** at high effort (vendor testimonial).

Coding:

- SWE-bench Verified: **87.6%** (computingforgeeks + morphllm corroborated; 4.6 80.8%, Opus 4.8 88.6%, Gemini 3.1 Pro 80.6%).
- SWE-bench Pro: **64.3%** (vendor scaffold; **#1 at launch**, leapfrogging GLM per Weekly Digest; 4.6 53.4%, GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%, Opus 4.8 69.2%).
- Terminal-Bench 2.1: **83.1%** current (AA) — below the 85% coding anchor.
- SciCode / AA-SciCode: no verified public score found (null). DeepSWE: not listed by AA. LiveCodeBench: no verified public score found.
- CursorBench: **70%** (vendor testimonial; 4.6 58%). Rakuten-SWE-Bench: resolves **3× more production tasks** than 4.6 (qualitative, vendor). Miro 93-task coding bench: **+13%** over 4.6 (vendor).

Long context:

- AA-LCR **78.7%** (long-context recall) current; **no ≥98% retrieval reported at 512K+**. 1M window verified. MLCR not reported.

Multimodal (vision):

- MMMU-Pro: **78.8%** current (AA, 0.78844). CharXiv Reasoning: **91.0%** launch. XBOW visual-acuity: **98.5%** vs 4.6's 54.5% (vendor testimonial). Enhanced 3.75 MP vision (~3× prior). Text-only output; no audio/video.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency excluded.

- **Tool use: 87/100.** Launch GDPval-AA 1753 (#1, clears the 1750 anchor), tau2 88.6%, MCP-Atlas 77.3%, OSWorld ~78–82% and SWE-bench Pro #1 show strong agentic tool use; capped below 90 by current GDPval 1361.69 (deprecated decline), Terminal-Bench 2.1 83.1% under 88, and weak Tau-Banking 34.6%.
- **Reasoning: 90/100.** GPQA Diamond 91.4–94.2% clears the 90 anchor and HLE 42.3–54.7% clears 40, with a launch AA Index co-lead; capped at the 90 floor by current Index N/A (deprecated), CritPt 12%, and null SciCode/Omniscience.
- **Context window: 95/100.** 1,000,000-token (1M) window verified across three sources, AA-LCR 78.7% recall; not 100 because no ≥98% retrieval at 512K+ is reported.
- **Multimodal: 75/100.** Text + image + PDF input with enhanced 3.75 MP vision and strong measured MMMU-Pro 78.8% / CharXiv 91.0% / XBOW 98.5%; floor of the PDF band, capped by text-only output and no audio/video.
- **Coding: 88/100.** SWE-bench Verified 87.6% and SWE-bench Pro 64.3% (#1 at launch) plus CursorBench 70% and Rakuten 3× show elite coding; capped below 90 by Terminal-Bench 2.1 83.1% under the 85 anchor and no DeepSWE/SciCode/LiveCodeBench values.
- **Cost efficiency: 50/100.** $5 in / $25 out (blended ~$3.85) sits between the $3/$15≈60 and $10/$50≈30 anchors; 90% cache discount ($0.50) helps, but fast mode $30/$150 is far pricier.
- **Overall Score: 87.0/100.** Half-up mean of (87 + 90 + 95 + 75 + 88) / 5 = 435 / 5 = 87.0. Best fit: high-stakes agentic coding, finance/legal document work and 1M-context reasoning at premium pricing; a former launch leader now deprecated in favor of Opus 4.8, so prefer the successor for new deployments.

### Conflicting-results notes

- **GDPval-AA:** launch 1753 (#1) vs current 1361.69 — deprecation + expanded/rebased pool drove a steep pool-relative decline; both reported, scored on the balanced view.
- **GPQA Diamond:** launch 94.2% (vendor table) vs current AA 91.4% — different vintage/harness.
- **HLE:** launch 54.7% *with tools* vs current AA 42.3% (no-tools subset) — harness difference, not a capability regression.
- **Terminal-Bench:** launch 2.0 69.4% vs current 2.1 83.1% — **different task sets** (morphllm explicitly cautions 2.0 ≠ 2.1); not a real improvement.
- **OSWorld-Verified:** 78.0% (computingforgeeks) vs 82.3% (morphllm) — conflicting runs; treated as ~78–82%.
- **AA Intelligence Index:** launch co-leader vs current N/A — deprecated; components retained, headline withdrawn.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research (4 independent searches; official Anthropic announcement + computingforgeeks + morphllm + Artificial Analysis current model page + Weekly AI Model Digest + AA GPT-5.5 article); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [Artificial Analysis — Claude Opus 4.7 model page (current components, deprecated)](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [Computingforgeeks — Claude Opus 4.7 features, benchmarks, how to use](https://computingforgeeks.com/claude-opus-4-7-released-features-benchmarks/)
  - [MorphLLM — Claude Benchmarks (2026)](https://www.morphllm.com/claude-benchmarks)
  - [Weekly AI Model Digest — April 19, 2026 (GDPval-AA 1753 launch)](https://gist.github.com/igorrivin/b7624013b2d4e8ea2fe628f0fa195b05)
  - [Artificial Analysis — GPT-5.5 is the new leading AI model (Opus 4.7 GDPval comparison)](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model)
  - [Claude Opus 4.7 System Card (PDF)](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.