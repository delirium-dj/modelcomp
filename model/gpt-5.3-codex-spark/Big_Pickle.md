# GPT 5.3 Codex Spark — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.3-codex-spark`, API model `gpt-5.3-codex-spark`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex Spark
- **Short description:** OpenAI's first ultra-low-latency coding model, released 2026-02-12 as a research preview — a smaller sibling of GPT-5.3-Codex tuned for real-time, interactive engineering work (targeted edits, refactors, UI tweaks, prototyping) rather than long autonomous runs. It is the first model in production on Cerebras silicon, streaming **more than 1,000 tokens/second** on a Cerebras Wafer-Scale Engine 3. Positioned as a "daily productivity driver" that can debug, deploy, monitor, write PRDs, edit copy, run tests and metrics, with mid-task steering and frequent status updates. Explicitly exempted from the June 2026 Codex deprecations that retired GPT-5.2-Codex and the full GPT-5.3-Codex.
- **Provider / access:** Codex app, Codex CLI and VS Code extension for **ChatGPT Pro** subscribers; API access limited to a small set of design partners (no general public API pricing); OpenCode Zen `opencode/gpt-5.3-codex-spark`.
- **Release / knowledge:** released 2026-02-12, seven days after GPT-5.3-Codex; knowledge cutoff not published for the Spark variant (parent GPT-5.3-Codex: 2025-08-31).
- **IDs:** `opencode/gpt-5.3-codex-spark` (Zen, standard pricing); upstream `gpt-5.3-codex-spark`.
- **Context window:** **128,000 tokens**, text-only at launch. OpenAI has committed to longer contexts and multimodal input in future models of this family; max output tokens not disclosed.
- **Modalities:** **text only** (no image input in the preview).
- **Pricing (as of 2026-10-02):** **no public per-token rate.** Included with ChatGPT Pro / Codex access under its own preview rate limits, which do not count toward standard limits and may throttle or queue under high demand. Purchased Credits, where applicable, bill at the Codex rate card.
- **Architecture:** proprietary, undisclosed parameter count — OpenAI describes it only as "a smaller version of GPT-5.3-Codex". Served on **Cerebras WSE-3** (on-chip SRAM, single-wafer design), OpenAI's first production deployment on non-Nvidia silicon, under a multi-billion-dollar Cerebras partnership announced January 2026.
- **Infrastructure:** OpenAI added a persistent WebSocket path and Responses API changes for Spark — **80% less overhead per client/server round trip, 30% less per-token overhead, 50% lower time-to-first-token**. OpenAI reports Spark's outputs are generated ~25% faster on average and consume roughly **half the tokens** of earlier models on comparable outputs.

### Raw benchmarks found

OpenAI's Spark announcement cited SWE-Bench Pro and Terminal-Bench 2.0 but **published no absolute percentages** for Spark, describing only "strong performance … in a fraction of the time compared to GPT-5.3-Codex".

- Terminal-Bench 2.0: **77.3%**, "improving on the 64% accuracy level of GPT-5.2-Codex" — SiliconANGLE, 2026-02-12. **Attribution conflict, recorded not resolved:** OpenAI's own GPT-5.3-Codex launch page (2026-02-05) also lists Terminal-Bench 2.0 = **77.3%** for GPT-5.3-Codex with **64.0%** for GPT-5.2-Codex — the identical pair. Either SiliconANGLE attributed the parent model's number to Spark, or both models genuinely score 77.3%. Treated here as a **plausible but unconfirmed** coding-agentic score, not as a settled measurement.
- SWE-Bench Pro: **no verified public score found for the Spark variant.** (TheModelverse claims 38.6%, but that page is internally inconsistent — it reports "$null" pricing and describes an "Omni multimodal unified encoder" for a model OpenAI states is text-only — so it is not treated as verified.)
- OSWorld-Verified, GDPval, SWE-Lancer, MCP Atlas, τ²-bench: **no verified public score found for Spark.** (Parent GPT-5.3-Codex: OSWorld-Verified 64.7%, SWE-Bench Pro 56.8%, GDPval wins-or-ties 70.9% — different model, not transferable.)
- GPQA Diamond / HLE / AIME / MMLU-Pro: **no verified public score found.** OpenAI's only reasoning claim is qualitative: Spark "surpasses the reasoning capabilities of the full-fat GPT-5.2-Codex model".
- Throughput: **>1,000 tokens/second** (OpenAI, on ultra-low-latency Cerebras hardware) — roughly an order of magnitude faster than full GPT-5.3-Codex.

### Normalized scores (1–100)

- **Tool use: 68/100.** Scored from capability and product design rather than a benchmark table, since OpenAI published none. Evidence: Terminal-Bench 2.0 at a reported 77.3% (attribution disputed above), explicit agentic-engineering framing (debugging, deploying, monitoring, tests, metrics, PRDs), mid-task steering and frequent status updates, and WebSocket transport cutting per-round-trip overhead 80%. Capped because no τ²-bench, MCP Atlas or OSWorld row exists for this ID and preview rate limits throttle sustained agent runs.
- **Reasoning: 60/100.** No GPQA, HLE or AIME figure exists. What is documented is efficiency rather than depth: OpenAI claims Spark exceeds GPT-5.2-Codex reasoning while generating ~25% faster and consuming roughly half the tokens, and concedes that for heavy multi-step reasoning the larger Codex models still win on absolute quality. A fair mid-range score for a small speed-optimized sibling with an unquantified ceiling.
- **Context window: 56/100.** A real 128,000-token window, but the smallest in this comparison and the one OpenAI itself flags as a preview limitation — it explicitly promises "larger models, longer context lengths" later in this family. No MRCR, RULER or GraphWalks measurement was published, and the window is more than 3× shorter than its own parent GPT-5.3-Codex's 400K.
- **Multimodal: 10/100.** **Text-only** at launch — this is a hard capability absence, not a measurement gap, so the score sits at the floor rather than mid-range. OpenAI names multimodal input as a planned future addition to the ultra-fast family, so the ceiling is not fixed.
- **Coding: 72/100.** Coding is the model's entire reason to exist, and the qualitative record is strong: OpenAI says Spark beats GPT-5.1-Codex-mini on quality, scores strongly on the two agentic-SWE benchmarks it named, completes tasks in a fraction of GPT-5.3-Codex's time, and produces production-ready interactive results. The number is not pushed higher because OpenAI published no absolute Spark score and the one figure in circulation is disputed.
- **Cost efficiency: 74/100.** The compelling part is throughput economics rather than a rate card: >1,000 t/s, ~half the tokens per output, 50% lower TTFT and 80% less round-trip overhead make fast iteration loops dramatically cheaper in wall-clock and token terms. Offset by there being **no public per-token price at all** — access is bundled into ChatGPT Pro / Codex with separate preview limits that can queue under load.
- **Overall Score: 53.2/100.** Half-up mean of the five quality dims (68 + 60 + 56 + 10 + 72 = 266 / 5), Cost excluded. The low total is structural, not a verdict on the engineering: a text-only, 128K, unpublished-benchmark, subscription-gated research preview cannot outscore scored production models on an evidence-weighted axis. Best fit is exactly what OpenAI designed it for — interactive, latency-critical code editing inside Codex — where the Cerebras speed advantage outweighs the missing breadth.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex-Spark" announcement, OpenAI "Introducing GPT-5.3-Codex" launch tables for parent-model comparison, AI/TLDR model page, SiliconANGLE and CMOTech launch coverage, AI Release Tracker, TheModelverse — used only as a flagged unreliable cross-check). **No GPT-5.3-Codex or GPT-5.2-Codex score was transferred to Spark**; the disputed 77.3% Terminal-Bench figure is attributed and flagged rather than presented as settled.
- Evidence note: OpenAI published no absolute benchmark percentages for this model at launch; the Terminal-Bench 2.0 attribution conflict between SiliconANGLE and OpenAI's parent-model table is unresolved and left visible.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Codex.md`, using the same headings.

---