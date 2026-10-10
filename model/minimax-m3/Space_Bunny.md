# MiniMax M3 — findings by Space Bunny

- Source: MiniMax (`MiniMax-M3`; open-weight and API, thinking on/off on the same model)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight, natively multimodal coding and agent model with 1M context, long-horizon execution, and **MiniMax Sparse Attention (MSA)**. Per MiniMax, it is "the first and only open-weight model to bring all three together" — 1M context, frontier-tier coding, and native image/video input with desktop computer operation.
- **Provider / access:** MiniMax API (`https://api.minimax.io/v1/text/chatcompletion_v2`, model `MiniMax-M3`); Hugging Face weights `MiniMaxAI/MiniMax-M3`; **16 API providers** per Artificial Analysis. OpenAI-compatible and local deployment supported. Subscription tiers: **Plus $20/mo (~1.7B tokens), Max $50/mo (~5.1B), Ultra $120/mo (~9.8B)**. Priority channel available via sales support.
- **Release / knowledge:** Announced **2026-06-01**; some trackers list 2026-05-31, likely the weights-availability date. The model card's system prompt states a **January 2026** knowledge cutoff, though trackers flag it as unpublished rather than formally declared.
- **IDs:** `MiniMax-M3`; Hugging Face `MiniMaxAI/MiniMax-M3`.
- **Context window:** Up to **1,000,000 tokens**, with a guaranteed minimum of 512K stated by MiniMax. Artificial Analysis independently confirms 1M (~1500 A4 pages). Vals lists 512K max output.
- **Modalities:** **Text, image, and video input; text output.** Natively multimodal — MiniMax states M3 "can operate a desktop computer," and the model ecosystem ships a computer-use agent (MiniMax Code), not just chat.
- **Pricing (official API page, verified 2026-10-10 — this resolves the prior pass's "public token table not visible"):** Standard tier, **input ≤512K: $0.30 input / $0.06 cached input / $1.20 output** per 1M — a permanent 50% discount off the $0.60 / $2.40 list. **Input >512K: $0.60 / $0.12 / $2.40** — the rate doubles. **Priority tier is 1.5×.** Artificial Analysis reports an 80% cache discount and a $0.22–$0.53 blended 7:2:1 or 3:1 rate depending on weighting.
- **Architecture:** Open-weights MoE, **428B total / 23B active**. **MiniMax Sparse Attention (MSA)** — a new sparse attention architecture giving the 1M window with **per-token compute at 1M context that is 1/20 of the previous generation**, delivering **>9× prefilling and >15× decoding speedups**. Across ablations, MSA matched full attention on the vast majority of capabilities. Hybrid: reasoning can be enabled or disabled at request time on the same model.
- **License — important restriction:** **MiniMax Community License**, not OSI-approved. Free for non-commercial use; commercial use **below $20M annual revenue** requires only a notice email and a "Built with MiniMax" attribution label; **above $20M, prior written authorization is required.** This is a materially tighter constraint than the MIT (GLM, DeepSeek) or Apache-2.0 (Qwen3.8-27B) licenses elsewhere in this dataset.
- **Lifecycle:** No deprecation, discontinuation, or successor notice found. MiniMax's own material keeps M2.5 available as a cheaper option rather than deprecating it, so no predecessor relationship is claimed.

### Raw benchmarks found

**Official — MiniMax M3 launch blog (2026-06-01):**

| Benchmark | Score | Harness / notes |
| --- | --- | --- |
| MCP Atlas | **74.2%** | |
| Terminal-Bench 2.1 | **66.0%** | Terminus-2, 8C16G sandbox, 2h timeout, max output 128K |
| SWE-Bench Pro | **59.0%** | Claude Code scaffolding, aligned to official eval |
| SWE-bench Verified | **80.5%** | Claude Code scaffolding, default system prompt overridden, 4 runs averaged |
| SWE-fficiency | **34.8%** | Open-source dataset, Claude Code, 1C2G, 2h timeout |
| KernelBench Hard | **28.8%** | |
| BrowseComp | **83.5** | |
| PostTrainBench | **37.1** (#3 overall) | 12-hour autonomous post-training of four base models across AIME2025, BFCL, GPQA Main, GSM8K, HumanEval |
| SWE Atlas-Codebase QnA / Test Writing | published | Mini-SWE-Agent / Claude Code, 4C8G, 3h timeout |
| OfficeQA Pro, IMO 2025 & USAMO 2026 | published | IMO/USAMO used MathArena-aligned eval, 512K max output, test-time scaling up to 10 iterations, dual expert grading taking the minimum |
| CUDA kernel optimization (headline demo) | 147 iterations, 1,959 tool calls, hardware utilization 7.6% → 71.3%, **9.4× speedup** | task-specific experiment |

**Independent — Artificial Analysis (v4.3.2):**

- Intelligence Index **29.2** (prior pass recorded 29 — unchanged)
- **GPQA Diamond 92.9%** — **#12 of 183** / #15 of 511. The prior pass recorded "no verified GPQA value found"; this is now the model's strongest independent reasoning datapoint.
- **HLE 39.0%** (no tools)
- IFBench **82.9%**; **Terminal-Bench Hard 42.4%**
- **Terminal-Bench 4.0: 2.0%** — #33 of 88 / #41 of 89. Effectively a zero.
- Output speed ~88–115 t/s; cost per Index task ~$0.51

**Independent — Vals AI (official MiniMax API, temp 1, top_p 0.95, 512K max output):**

- **Vals Index 58.94% — #6 overall**, and **Vals Multimodal Index 59.97% — #6**, making M3 the **top open-weights model on both**
- **SWE-bench Verified 75.0% (#17)** vs. MiniMax's own 80.5% — a 5.5-point vendor-vs-independent gap
- **Terminal-Bench 2.1 53.56% (#12)** vs. MiniMax's 66.0% — a **12.4-point** vendor-vs-independent gap
- **Vibe Code Bench 47.57%** — a ~35-point improvement over MiniMax-M2.7
- **Finance Agent v2 48.27%** — a ~20-point improvement over M2.7
- Top open-weights performer on **LegalBench, MedCode, and Finance Agent v2**
- Long-context pricing run: Vals Index 42.72% ± 1.20 at $2.496/test, 35m 15s

**Other:**

- LMArena text Elo **1441** (`minimax-m3`, arena.ai, 2026-09-13)
- Terminal-Bench 2.x: **#41 of 103**; SWE-bench Pro **#15 of 32**; GPQA Diamond **#16 of 142**
- **Terminal-Bench 4.0 field for context:** Claude Sonnet 5.5 leads at 63.6%, Opus 5.5 at 59.6% — M3's 2.0% is not a near-miss

**Conflicts retained:** SWE-bench Verified **80.5% (MiniMax) vs. 75.0% (Vals)**; Terminal-Bench 2.1 **66.0% (MiniMax) vs. 53.56% (Vals)**.

Sources consulted: [MiniMax M3 launch blog (2026-06-01)](https://www.minimax.io/blog/minimax-m3), [Vals AI MiniMax-M3](https://www.vals.ai/models/minimax_MiniMax-M3), [modelscale.dev MiniMax M3 (observed 2026-10-08)](https://modelscale.dev/models/minimax-m3), [Model Pareto MiniMax-M3](https://frontier.warpcore.app/m/minimax-m3), [Sophon MiniMax M3](https://sophon.at/models/minimax-m3), [Tokens or Towers MiniMax-M3](https://www.tokensortowers.com/us/models/minimax-m3), [waitwhichmodel MiniMax M3](https://www.waitwhichmodel.fyi/models/minimax-m3), and [Artificial Analysis MiniMax M3](https://artificialanalysis.ai/models/minimax-m3), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 92/100.** Unchanged. **MCP Atlas 74.2%** is now sourced from MiniMax's own blog — the prior pass listed MCP-Atlas as "no verified value found." Terminal-Bench 2.1 **66.0%**, BrowseComp **83.5**, PostTrainBench **37.1**, SWE Atlas Codebase-QnA and Test-Writing, and native desktop computer operation all support a high agentic read. Capped by **Terminal-Bench 4.0 at 2.0%** — a near-zero on the current terminal-agent harness, where the leaders sit at 59–64% — and by Vals' independent Terminal-Bench 2.1 at **53.56%** against MiniMax's 66.0%.
- **Reasoning: 87/100.** Raised from 80. The prior pass recorded "no verified GPQA, HLE, LCR, or hallucination values found." **GPQA Diamond 92.9% (#12 of 183)** and **HLE 39.0%** are both now on the record, alongside **IFBench 82.9%** and an Intelligence Index of 29.2 that is nearly 1.6× the open-weight median of 18. Held below 90 by HLE at 39.0% and by the AA Index sitting mid-pack despite the strong GPQA — GPQA is one narrow slice of frontier reasoning.
- **Context window: 96/100.** Raised from 95. The prior pass noted "no independent retrieval-at-length score," which remains true, but the *engineering* case is now documented: **MSA delivers 1M context at 1/20 the per-token compute of the previous generation, with >9× prefill and >15× decode speedups, and matched full attention on the vast majority of capabilities in ablation.** That is what turns a nominal 1M window into a usable one. Deducted for the fact that 1M is a long-context *tier* at 2× price and that no AA-LCR figure was recoverable.
- **Multimodal: 95/100.** Unchanged, now independently substantiated. Native image **and video** input with text output, plus verified desktop computer operation. The decisive addition is **Vals Multimodal Index 59.97%, #6 overall and the top open-weights model** — an independent multimodal composite rather than a vendor capability claim. Not higher because there is no absolute vision-benchmark table and no image or video generation.
- **Coding: 87/100.** Reduced from 88. **SWE-bench Verified 80.5%** and **SWE-bench Pro 59.0%** are real and competitive (Pro ranks #15 of 32, above GPT-5.5's 58.6%), and Vibe Code Bench improved ~35 points over M2.7. The reduction reflects the newly visible independent numbers and hard harnesses: **Vals' SWE-bench at 75.0%** and **Vals' Terminal-Bench 2.1 at 53.56%** are both well under the vendor figures, **SWE-fficiency is 34.8%**, **KernelBench Hard 28.8%**, and **Terminal-Bench 4.0 is 2.0%**.
- **Cost efficiency: 88/100.** Reduced from 92. **$0.30 / $1.20 with $0.06 cached input** is excellent — cheapest open-weights 1M-context multimodal route in this dataset, and ~$0.51 per Intelligence Index task. Three deductions: **the rate doubles above 512K input**; **Priority tier is 1.5×**; and the **MiniMax Community License is the real constraint** — above **$20M annual revenue, self-hosting requires prior written authorization from MiniMax**, which makes open weights a weaker fallback than they appear for large commercial deployments.
- **Overall Score: 91.4/100.** (92 + 87 + 96 + 95 + 87) / 5 = 457 / 5 = 91.4, up from 90.0. The prior pass under-scored Reasoning for lack of data and over-scored Coding and Cost by missing the independent runs and the license terms. **Best fit:** open-weight multimodal coding agents and long-context work at minimal cost, where MSA makes the 1M window genuinely usable rather than nominal. **Three things to verify before committing:** the **Community License revenue clause**, the **2.0% Terminal-Bench 4.0**, and the **12-point vendor-vs-Vals gap on Terminal-Bench 2.1**.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of MiniMax's official M3 launch blog and API pricing page, plus Artificial Analysis, Vals AI, LMArena, Model Pareto, Sophon, and independent spec trackers; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent rows are kept separate, with harness and scaffold labels retained. Cost efficiency is excluded from Overall.
- Audit note: two vendor-vs-independent gaps are retained unresolved — **SWE-bench Verified 80.5% vs. 75.0% (Vals)** and **Terminal-Bench 2.1 66.0% vs. 53.56% (Vals)**. The 2026-06-01 announcement is the benchmark authority for vendor figures; "2026-05-31" in some trackers is treated as a weights-availability date, not a release date.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3_Recheck.md`, using the same headings.