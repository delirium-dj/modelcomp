# MAI-Code-1-Flash — findings by Qwen 3.8 Max

- Source: Microsoft AI (`microsoft/mai-code-1-flash`; id `microsoft/mai-code-1-flash`; **no Artificial Analysis page**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Microsoft AI's **June-2026 Copilot-native agentic coding model** — a **sparse-MoE 137B-total / 5B-active** "Flash" coder with **adaptive thinking** (reasoning depth scaled to task difficulty), trained directly in real file-system/terminal/linter environments and tuned for **Maia 200 silicon** (~1.4× perf/watt). It is scored, not excluded — a distinct, announced, shippable model with a Microsoft model card and concrete benchmark numbers — but the evidence is **entirely vendor-reported**: **no Artificial Analysis Intelligence Index / Speed / Cost page**, and **`models.dev` lists 0 API providers** (it is reached inside **GitHub Copilot / VS Code + Azure AI Foundry**, and — despite Microsoft's announcement — was **never listed on OpenRouter**). Its headline is a genuine-for-5B-active **coding** core — **SWE-bench Verified 71.6 / SWE-bench Pro 51.2 / Terminal-Bench 2.0 54.8** with ~**10,800 avg tokens per SWE-bench-Verified solution** and a claimed **up-to-60% token reduction** — pitched explicitly against **Claude Haiku 4.5** (Microsoft's VS-Code-harness comparison: SWE-Pro **51.2 vs 35.2**, SWE-Verified **71.6 vs 66.6**). **Confidence is capped** because (per the curated tradeoff) several of the harness evals circulate **only as model-card chart images**, and general **reasoning/knowledge is unbenchmarked** (no AIME/GPQA/HLE) — this is a *coding* model, not a general reasoner. **Guards applied:** it is **not** MAI-Thinking-1 (b11's 962B/34.7B general flagship — none of its AIME 97 / GPQA 84.2 credits here), **not** the cheaper/stronger successor **MAI-Code-1.1-Flash** ($0.20/$1.20), and **not** MAI-Experimental-Test.

## Model card

- **Name:** MAI-Code-1-Flash (`microsoft/mai-code-1-flash`)
- **Short description:** Microsoft AI's **first in-house agentic coding model** — a lightweight **5B-active sparse MoE** built for fast, efficient code assistance inside **GitHub Copilot and VS Code**, with **adaptive thinking** that stays brief on simple edits and expands on multi-file refactors. Trained in real dev environments (file systems, terminals, linters) and co-designed with Microsoft's **Maia 200** inference silicon.
- **Provider / access:** **GitHub Copilot / VS Code-native + Azure AI Foundry.** **`models.dev` lists 0 hosted providers**, and it was **never added to OpenRouter** (contradicting the launch copy about third-party availability; reseller pages claiming OpenRouter/Fireworks/Baseten routes are self-promotional and unverified). **No Artificial Analysis page.** `noFreeId: true`.
- **Release / knowledge:** Released **2026-06-02** (models.dev; updated 2026-06-08). **Knowledge cutoff Dec 2025.** Successor **MAI-Code-1.1-Flash** later superseded it (Microsoft's model URL now redirects to 1.1-Flash).
- **IDs:** `microsoft/mai-code-1-flash`.
- **Context window:** **256,000 total / 128,000 max output.** Corroborated (models.dev + press).
- **Modalities:** **Text in / text out.** Capabilities flagged: `tools`, `reasoning`, `temperature` (a coding-focused reasoning model; the apimart "video / multimodal creative workflow" framing is that reseller's SEO, not a Microsoft model-card modality claim). **Text-only** (matches meta).
- **Pricing:** **$0.75 / $4.50 per 1M in/out** (GitHub Copilot / models.dev), **$0.075 / 1M cached input** (~90% cache discount). No separate Microsoft first-party price card; the successor 1.1-Flash is a quarter of the cost at **$0.20 / $1.20**.
- **Architecture:** **Sparse Mixture-of-Experts, 137B total / 5B active per token**, **adaptive thinking** (difficulty-scaled reasoning length), Copilot/VS-Code-trained, Maia-200-silicon-tuned (~1.4× perf/watt). Closed weights.

### Raw benchmarks found

> **Provenance: Microsoft's model card / launch post, as reproduced by models.dev, Hacker News, and third-party coverage (APIMart, decodethefuture, thomas-wiegold review).** **No Artificial Analysis measurement exists** (no page), so there is **no independent Intelligence Index / Speed / Cost**. **Three of the four harness figures circulate only as model-card chart images** and were not transcribed into reproducible text by the coverage — treated with a confidence discount. The "Claude Haiku 4.5" comparison values (66.6 / 35.2) are **Haiku's own, run in Microsoft's VS-Code harness** — context only, **never credited to MAI-Code-1-Flash.**

**Coding (vendor — the model's whole purpose):**
- **SWE-bench Verified: 71.6%** (vs Haiku 4.5 66.6% in Microsoft's harness) — public harness, strong for 5B-active.
- **SWE-bench Pro: 51.2%** (vs Haiku 4.5 35.2%) — Microsoft's VS-Code-harness number; the marquee ~16-point gap.
- **Terminal-Bench 2.0: 54.8%** — agentic terminal use (note: **TB 2.0**, the vendor's version label).
- **Avg. tokens per SWE-bench-Verified solution: 10,800**; claims **up to 60% fewer tokens** than comparable models (the "adaptive thinking" efficiency pitch).
- **Microsoft *internal* adversarial coding benchmark: 85.8% adjusted accuracy** (impossible-tasks / inverted-logic suite) — **internal, non-reproducible**; flagged as such.

**Reasoning / knowledge:**
- **None published.** No AIME, GPQA-Diamond, HLE, MMLU-Pro, or LiveCodeBench figure — "adaptive thinking" is a *response-length* mechanism for coding, not a general-reasoning benchmark. (Reasoning score rests on this absence + the coding-agent design, not on knowledge-bench evidence.)

**Agent / tool use:**
- Tool-calling + function-calling supported; Copilot/VS-Code agent harness is the primary surface; Terminal-Bench 2.0 54.8 is the only public agentic number. The **85.8% internal adversarial** result is *coding*, not an independent tool-use eval.

**Long context:**
- No needle/MRCR/RULER figure; the 256K/128K window is the models.dev + press spec, exercised (per press) on full codebases/course repos in a single pass.

**Speed / cost:**
- **No AA Speed measurement** (no page). Efficiency claims (5B-active, 1.4× perf/watt on Maia 200, up-to-60% fewer tokens) are **vendor**, aimed at inference cost rather than a tok/s rating. **$0.75/$4.50, $0.075 cached.**

> **Self-reported:** all quantitative claims originate from Microsoft's model card / launch; independent reproduction is limited to the same numbers being *quoted*, and three harness figures were chart-image-only in the public card. Discounted but usable — a real, announced, Copilot-shipped model with first-party benchmarks (per the `pixel_canary` / `xing_4.0_29b_a4b` precedent).

### Normalized scores (1–100)

- **Tool use: 62/100.** Genuinely agentic (tool/function calling, Copilot/VS-Code harness, trained on real terminals/linters, TB 2.0 54.8), but the tool-use story is **coding-domain only** and the strongest "85.8%" figure is an **unreproducible internal suite**.
- **Reasoning: 58/100.** "Adaptive thinking" is a real difficulty-scaled reasoning mode, but **zero general-reasoning benchmarks** are published (no AIME/GPQA/HLE) — this is a coder, so the reasoning axis is inferred and low-confidence.
- **Context window: 78/100.** **256K total / 128K out**, corroborated across models.dev + press — a strong footprint for single-pass codebase work; standard (not hybrid-extended) window.
- **Multimodal: 50/100.** **Text-only** (corpus convention; the reseller "video/multimodal" framing is not a Microsoft model-card capability).
- **Coding: 72/100.** The clear specialty and where it competes at a high level — **SWE-Verified 71.6 / SWE-Pro 51.2 / TB 2.0 54.8** is impressive *for 5B-active* and beats Haiku 4.5 in Microsoft's own harness — but held below a corroborated equivalent because **everything is vendor-run, no AA index exists, and three evals were chart-image-only**.
- **Cost efficiency: 64/100.** **$0.75/$4.50** is mid-range, softened by the **~90% cache rate ($0.075) and claimed up-to-60% token reduction**; undercut further by the successor's $0.20/$1.20. *(Scored; not counted in Overall.)*
- **Overall Score: 64/100.** Half-up mean of the five quality dims (62 + 58 + 78 + 50 + 72)/5 = **320/5 = 64.0 → 64**. **Curated `average.md` = 62.4 → div +1.6** (the report lands slightly above the curated value on the strength of the coding profile + 256K window, tempered by the all-vendor evidence and missing reasoning coverage).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**models.dev `microsoft/mai-code-1-flash`** — 256,000 ctx / 128,000 out, knowledge **2025-12**, release **2026-06-02** (updated 06-08), closed weights, capabilities `tools`/`reasoning`/`temperature`, **0 providers listed**; **Microsoft AI launch (x.com/MicrosoftAI + microsoft.ai/news)** — sparse MoE **137B total / 5B active**, **adaptive thinking**, **SWE-bench Verified 71.6 vs Haiku 4.5 66.6**, **SWE-bench Pro 51.2 vs Haiku 4.5 35.2**, **Terminal-Bench 2.0 54.8**, ~**10,800 avg tokens/solution**, up-to-**60% fewer tokens**, **$0.75/$4.50** ($0.075 cached), Copilot/VS-Code-native, **Maia 200** silicon ~1.4× perf/watt, internal adversarial-coding **85.8%**; **Hacker News** thread 48374466 + **APIMart / decodethefuture / thomas-wiegold** reviews — corroborate the model-card table and the Haiku-4.5-harness framing; **Artificial Analysis** — **no `mai-code-1-flash` page**, so no independent Index/Speed/Cost; curated meta verified — 5B-active/256K, SWE-Pro 51.2 vs Haiku 35.2, $0.75/$4.50 with no MS price card, "three of four harness evals are chart images only," successor cheaper+stronger, **OpenRouter never listed it** — all confirmed). **All evidence vendor-reported and discounted; the Haiku 4.5 comparison values are never credited to MAI-Code-1-Flash.**
- Future sources: if Artificial Analysis (or a neutral harness) evaluates `microsoft/mai-code-1-flash` directly, or if the **chart-image-only** model-card evals are published as reproducible numbers / a **reasoning benchmark** is added, replace the vendor-only figures. **Guard against** (a) importing **MAI-Thinking-1's** general-flagship numbers (AIME/GPQA), (b) crediting **MAI-Code-1.1-Flash**'s or **MAI-Experimental-Test**'s specs/scores to this model, and (c) treating reseller claims of OpenRouter/Fireworks/Baseten availability or "video/multimodal" workflows as fact — `models.dev` shows **0 providers** and the modality is **text-only**.
