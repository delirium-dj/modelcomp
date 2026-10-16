# Gemini 3 Pro — findings by GPT 6.1 Sol

- Source: Google DeepMind / historical `gemini-3-pro-preview`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** November 2025 multimodal Pro reasoning model. This is a historical assessment of the original preview, not Gemini 3.1 Pro, Pro Image/Nano Banana, or Deep Think's enhanced configuration.
- **Provider / access:** Historically Gemini API/AI Studio, Vertex AI and consumer/developer integrations [S1,S7]. Original Developer API model shut down March 9, 2026 according to the indexed primary warning; current availability under an old alias must not be assumed to serve original weights [S6].
- **Release / knowledge:** November 18, 2025 [S1,S2]; January 2025 cutoff per independent AA profile [S3], exact primary cutoff not reverified.
- **IDs:** Historical `gemini-3-pro-preview`; repository display slug `gemini-3-pro`. No distinct current bare-Pro route or Zen Free ID verified.
- **Context window:** Official launch 1M; Vals historical API maximum output 65,536 [S1,S2]. Claims of 2M are not supported by inspected primary launch material.
- **Modalities:** Text/image/video/audio/PDF input, text output; reasoning and tool-agent workflows [S1,S2,S3]. Antigravity launch also used separate computer-use/image models; those product capabilities are not automatically native Pro media output [S1].
- **Pricing (historical, researched 2026-10-16):** $2 input/$12 output per million tokens up to 200K context, $4/$18 above; $0.20/$0.40 cached input, batch half price, secondary historical rate sheet [S4]. AA independently corroborates $2/$12 and 90% cache discount for its listed tier [S3]. Not a claim that original retired inference can currently be purchased.
- **Architecture:** Proprietary; parameter count undisclosed [S3]. No unverified model-size or TPU-generation claim adopted.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.0** **54.2%**, vendor launch [S1]; Vals high-effort **55.06% ±5.30** [S2]. Do not relabel as 2.1 or 4.0.
- Vending-Bench 2: official launch reports leadership over a simulated year, but no numeric result in fetched prose; no value invented [S1].
- GDPval-AA / Tau3-Banking / Claw-Eval / ClawProBench / MCP-Atlas / Toolathon: no verified exact numeric result found in inspected sources.
- Product testimonials on tool-call-error reductions are qualitative partner evidence, not standardized agent success benchmarks [S7].

Reasoning / knowledge:

- GPQA Diamond **91.9%**, HLE **37.5% without tools**, MathArena Apex **23.4%**, SimpleQA Verified **72.1%**, official original Pro launch [S1].
- Vals GPQA **91.67% ±1.39**, MMLU Pro **90.10% ±0.29**, LegalBench **87.03% ±0.37** [S2].
- AA Intelligence Index **28 estimated**, v4.3.2, **#104/217** in current profile; explicitly not a fully measured current index score [S3].
- Vals profile headline accuracy **69.38%**, with no current ranked Vals Index row; not presented as a comparable current index ranking [S2].
- CritPt / AA-LCR / MLCR / Omniscience hallucination rate: no verified exact result found in inspected direct text.
- **Excluded configuration:** Deep Think HLE **41.0%**, GPQA **93.8%**, ARC-AGI-2 **45.1%** are explicitly enhanced-mode measurements, not standard Pro scores [S1].

Coding:

- SWE-bench Verified **76.2%**, WebDev Arena **1487 Elo**, official Pro launch [S1].
- Vals current SWE-bench row **76.40% ±1.90**, LiveCodeBench **86.41% ±0.98**, Vibe Code Bench v1.1 **14.30% ±3.06** [S2]. The wide gap between competitive-programming and app-building suites limits universal coding claims.
- SWE-Pro / DeepSWE / SciCode: no verified exact score found in inspected sources.

Long context and multimodal:

- Official 1M capacity; no verified ≥512K MRCR/RULER retrieval percentage found [S1].
- MMMU-Pro **81.0%**, Video-MMMU **87.6%**, vendor launch [S1]; Vals MMMU Pro **87.51% ±0.80** under its high-effort setup [S2]. Different evaluator protocols/snapshots retained, not averaged.

### Evidence comparison and research trail

Five distinct DuckDuckGo searches: `"Gemini 3 Pro" official Google model card documentation`; `"Gemini 3 Pro" independent Artificial Analysis benchmarks`; `"Gemini 3 Pro" review pricing limitations retired`; `site:docs.cloud.google.com "gemini-3-pro-preview" "March 26"` (no results); `site:ai.google.dev "gemini-3-pro-preview" "March 9"`. Directly read Google's original launch and Cloud enterprise post, Vals, AA current profile, LLM Stats' launch review, Magic Hour's lifecycle review and current Cloud lifecycle page. The historical Cloud model URL redirected to the general catalog. The Developer API deprecations page failed transport; its March 9 shutdown warning is corroborated only through indexed primary text plus the directly read secondary review [S5,S6].

Indexed primary changelog says the old alias now points to 3.1, while its model warning says shut down; both exclude original-weight reproducibility and do not establish continued original access [S6]. Unverified March 26 Cloud shutdown claims were not adopted after the dedicated search failed to substantiate them. The current AA score is explicitly estimated; calling it a newly measured 28 or mixing it with old leaderboard scales would overstate evidence [S3]. Google's standard Pro and Deep Think figures are kept apart; so are Pro and Pro Image results. LLM Stats' review supplies historical rate tiers but also asserts free-tier access, specific latency/TPU details and outdated competitor prices without sufficient traceable methodology. Those claims are not adopted. Its claimed 10K-token answer in 8.2 seconds is inconsistent with its 128-token/s figure absent an explained metric; no latency ranking is inferred [S4]. Magic Hour is a maintained routing review, not independent capability testing [S5].

### Normalized scores (1–100)

- **Tool use: 75/100.** Independently corroborated TB2.0 around 55% and documented agent usage support useful tools, capped by sparse modern agent evidence and historical endpoint reproducibility [S1,S2,S6].
- **Reasoning: 86/100.** HLE 37.5% no tools and GPQA around 92% support strong reasoning; enhanced-mode figures are excluded and current AA index is estimated [S1–S3].
- **Context window: 95/100.** Official million-token capacity earns the top tier without verified ≥98% full-window retrieval [S1].
- **Multimodal: 95/100.** Broad audio/video/image/PDF input and direct multimodal benchmark evidence; output remains text [S1,S2,S7].
- **Coding: 80/100.** SWE around 76% and LiveCodeBench 86.41% are strong, but Vibe 14.30% and old terminal performance cap modern software-agent confidence [S1,S2].
- **Cost efficiency: 72/100.** Historical $2/$12 is moderate paid pricing, with substantial long-context premiums; no current original-route task economics verified [S3,S4].
- **Overall Score: 86/100.** (75 + 86 + 95 + 95 + 80) / 5 = 86.2 → 86. Historical best fit: multimodal research and supervised coding; cost excluded. This is not a present deployment recommendation for the retired preview.

### Sources

- [S1] https://blog.google/products/gemini/gemini-3/ — primary November 18 launch, exact Pro/Deep Think distinction and numeric benchmarks.
- [S2] https://www.vals.ai/models/google_gemini-3-pro-preview — independent original-model high-effort benchmarks and output cap.
- [S3] https://artificialanalysis.ai/models/gemini-3-pro — independent profile, explicitly estimated v4.3.2 index and historical pricing.
- [S4] https://llm-stats.com/blog/research/gemini-3-pro-launch — secondary historical tiers and review; unsupported performance claims qualified.
- [S5] https://magichour.ai/blog/gemini-3-review — directly read maintained routing/shutdown review, not capability rerun.
- [S6] https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-preview and https://ai.google.dev/gemini-api/docs/changelog — primary shutdown/alias statements visible via targeted search snippets; direct full pages not accessed successfully.
- [S7] https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-is-available-for-enterprise — primary historical enterprise availability, 1M and modality corroboration.
- Additional lifecycle attempt: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions — current page lacks a matching original-Pro entry in inspected results, so no exact historical Cloud retirement inferred.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, five distinct searches, direct original vendor and independent measurements with lifecycle/review comparison. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
