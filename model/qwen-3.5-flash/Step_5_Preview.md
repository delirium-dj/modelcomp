# Qwen3.5 Flash — findings by Step 5 Preview

- Source: Alibaba (`qwen3.5-flash`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's closed-weights Flash-tier vision-language model (Feb 2026) — text/image/video in, text out, 1M context, hybrid linear-attention MoE — aimed at cheap visual reasoning, document and agent workloads.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio, OpenAI-compatible. models.dev records **11 providers**. The OpenCode Console/Zen catalog does not list this ID.
- **Release / knowledge:** released **2026-02-23** (models.dev, Alibaba, vals.ai, OpenRouter). One conflict: benchable.ai dates it 2026-02-25. Knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3.5-flash` (models.dev); `qwen/qwen3.5-flash-20260224` (OpenRouter live endpoint).
- **Context window:** 1,000,000 tokens total. Max output **65,536** (models.dev, Alibaba, OpenRouter) vs 66,000 (vals.ai) vs 64,000 (vercel.com) — a minor conflict. Alibaba's own limits doc adds max input 991,808, thinking-mode max input 983,616, and a max chain-of-thought budget of 81,920.
- **Modalities:** **multimodal — text, image and video in; text out** (OpenRouter API help + Alibaba help docs). models.dev's description reads "Qwen vision-language model for visual reasoning, documents, and agent tasks", which corroborates it. One dissenting tracker (aimodelwatch.dev) says "text, image" only — video input is therefore the single conflicting element.
- **Pricing (as of 2026-10-24):** three different real routes — **$0.0282/$0.2822 per 1M** (models.dev, AIHubMix — the cheapest, used for cost scoring), **$0.065/$0.26** (OpenRouter's `qwen3.5-flash-20260224`), and **$0.10/$0.40** (Alibaba's own official rate card, also cited by vals.ai and Vercel). One provider (Merge Gateway) offers a 250,000-token output limit at $0.029/$0.287, and ZenMux advertises 1,020,000/1,020,000 at $0.10/$0.40.
- **Architecture:** proprietary closed weights (no public repo — the HF path is auth-gated, 401). Vercel's model page documents a **Gated DeltaNet linear-attention plus sparse MoE hybrid with a 3:1 linear-to-full attention ratio**, which is the reason a 1M window is affordable here. Parameter count not disclosed.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **82.83%** (vals.ai) / **82.8%** (benchlm.ai) — two independent sources agree to within 0.03 points.
- MMLU-Pro: **84.06%** (vals.ai) / **84.1%** (benchlm.ai) — likewise near-identical.
- LiveCodeBench: **83.28%** (vals.ai) / **83.3%** (benchlm.ai).
- FrontierMath v2, Tiers 1-3: **18.246%** (benchlm.ai, citing epoch.ai).
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no Qwen3.5 Flash page (404), and its 89-model Alibaba roster does not include it.
- HLE, AIME, SciCode: no verified public score found.
- Vals Index (composite): **#22 of all models, 49.6% accuracy, #7 among open-weight** (vals.ai). Note this ranks it against every model vals.ai tests, not just Flash-tier.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 1M window is documented by models.dev, Alibaba and OpenRouter, but no retrieval-durability figure at a stated length exists.

Agent / tool use:

- **Terminal-Bench 2.0: 24.72%** (vals.ai) — the single load-bearing agentic number for this model, and it is well below the mid band.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Coding Agents Index: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Cost per test: **~$0.08** across the Vals Index (vals.ai).

Coding:

- **SWE-bench: 64.40%** (vals.ai table) vs **54.9%** labelled "SWE-bench Verified" (vals.ai update text) — an internal contradiction inside one source. The 54.9% figure is the one explicitly labelled "Verified", so it is the one used; the 64.40% is retained as lineage.
- LiveCodeBench: 83.28% (vals.ai) / 83.3% (benchlm.ai) — see reasoning section.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- **MMMU Pro: 81.91%** (vals.ai) — the strongest and most directly relevant number in this file.
- SAGE: 42.49%; MortgageTax 67.37%; MedCode 33.00%; MedScribe 70.62%; LegalBench 84.28% (#36/151); Corp Fin v2 64.2%; Case Law v2 55.9%; Finance Agent 46.7% (all vals.ai).
- MMMU (base), OCRBench, DocVQA, ChartQA, MathVista: no verified public score found.

Speed / cost:

- Latency: **2 min 30 s** end-to-end across the Vals Index, with overall accuracy 65.93% (vals.ai). No TTFT or tokens-per-second figure is published for this model; OpenRouter's telemetry fields for those were returned `null`.
- BenchLM composite: **42.51/100, #131 of 992** (benchlm.ai) — a very different frame from vals.ai's #22, because the two composites weight different benchmarks.

### Conflicts recorded (not silently resolved)

1. **SWE-bench:** vals.ai's table says 64.40% while its own update text says 54.9% "SWE-bench Verified". The Verified-labelled figure is used; both are recorded.
2. **Pricing:** $0.0282/$0.2822 (models.dev/AIHubMix) vs $0.065/$0.26 (OpenRouter) vs $0.10/$0.40 (Alibaba official, vals.ai, Vercel). The cheapest route is used for cost scoring; the 3.5x spread across routes is itself the most decision-relevant fact here.
3. **Max output:** 65,536 vs 66,000 (vals.ai) vs 64,000 (vercel.com).
4. **Release date:** 2026-02-23 (four sources) vs 2026-02-25 (benchable.ai).
5. **Modality:** text+image+video in per OpenRouter and Alibaba help docs vs "text, image" only per aimodelwatch.dev.
6. **Standing:** vals.ai ranks it #22 overall while BenchLM puts it #131/992 — these are different composites, not a factual contradiction, but they show how much the choice of composite moves this model's apparent position.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 at 24.72% is the only direct agentic-coding number and it is low; Tau3, GDPval-AA, the Coding Agents Index, Claw-Eval and Toolathon are all unpublished. MMMU Pro at 81.91% and Finance Agent at 46.7% show competent tool-mediated document and financial work, which keeps this out of the bottom band, but there is no evidence here of frontier agentic execution.
- **Reasoning: 72/100.** GPQA Diamond 82.83% and MMLU-Pro 84.06% (both double-sourced) sit comfortably above the 60-80% mid band and LiveCodeBench 83.28% corroborates. Capped below 80 by FrontierMath at 18.246% — a genuinely weak result — by the absence of any HLE or AA Intelligence Index, and by BenchLM's composite placing it at #131/992, which is a much harsher read than vals.ai's #22.
- **Context window: 92/100.** 1,000,000-token window with 65,536 max output is squarely in the ≥1M tier (95-100), and the Gated DeltaNet 3:1 linear-attention architecture is a plausible mechanism for making it affordable. Not scored 95+ because no MRCR/RULER retrieval figure at any length was published, so the window is documented and its durability is not.
- **Multimodal: 76/100.** Text, image and video in with text out. MMMU Pro at 81.91% is a strong, independently measured vision-reasoning result, and SAGE 42.49% plus MortgageTax 67.37% show real document-domain work. Scored 76 rather than higher because the methodology puts +video in at 75-90 with the ceiling reserved for audio input or non-text output, and because aimodelwatch disputes the video capability.
- **Coding: 60/100.** LiveCodeBench 83.28% is genuinely good and MMMU Pro 81.91% is unrelated but supportive, but the critical SWE-bench figure is contradictory *within its own source* (54.9% "Verified" vs 64.40% in the table), and SciCode, DeepSWE, Vibe Code Bench and Terminal-Bench are all unpublished. Held to 60 to reflect that the one repo-scale evidence point is unreliable rather than averaging it against an optimistic reading.
- **Cost efficiency: 92/100.** $0.0282/$0.2822 per 1M on the cheapest route with a measured ~$0.08 per Vals Index test — inside the methodology's ~$0.10/$0.20 ≈ 97-99 band on price alone. Held at 92 by the 3.5x price spread across real routes ($0.065/$0.26 on OpenRouter, $0.10/$0.40 on Alibaba's own card), by a 2 min 30 s end-to-end latency with no published tokens-per-second figure, and by the fact that the cheap routes are third-party rather than first-party.
- **Overall Score: 71/100.** Mean of the five quality dims (55 + 72 + 92 + 76 + 60 = 355 ÷ 5 = 71.0). Best fit: very cheap multimodal document, financial and long-context work where MMMU-Pro-class visual reasoning matters and 2.5-minute latency is acceptable. Avoid it for agentic terminal work, where Terminal-Bench 2.0 sits at 24.72%.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (models.dev's Alibaba catalog, vals.ai's full benchmark suite, and benchlm.ai's independent composite), plus OpenRouter's live API record, Vercel's model page and Alibaba's own help docs for specs; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — the SWE-bench contradiction inside vals.ai itself, the 3.5x price spread across routes, max output (65,536 vs 66,000 vs 64,000), release date, and video-input modality. Artificial Analysis has no page for this model, so no independent Intelligence Index exists.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
