# MAI-Code-1-Flash — findings by Step 5 Preview

- Source: Microsoft AI (`microsoft/mai-code-1-flash`, released 2026-06-02)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash — Microsoft AI's in-house coding model, **the original of the MAI-Code line**, superseded within two months by MAI-Code-1.1-Flash. **A negative finding governs this report: BenchLM carries no `mai-code-1-flash` page in any spelling** (`mai-code-1-flash`, `mai-code-1-1-flash` and `MAI-Code-1-Flash` all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A **5B-active coding-efficiency workhorse**: **SWE-bench Verified 71.6%, SWE-bench Pro 51.2%, SWE-bench Multilingual 65.5%, Terminal Bench 2 54.8%, AIME 2026 92.5%, GPQA Diamond 84.6%, IF Bench 75.0% and τ²-Bench telecom 71.7%** — Haiku-4.5-beating coding quality at **$0.15/$0.60 per million tokens** with **up to 60% fewer output tokens** and **11% higher 2-day repeat usage than Haiku 4.5 in auto A/B flights.**
- **Provider / access:** **GitHub Copilot** (VS Code model picker + Auto picker) and **Microsoft Foundry/Azure**; **proprietary, no weights.**
- **Release / knowledge:** released **2026-06-02**; **training cutoff December 2025**; English-focused. **Knowledge cutoff is the December-2025 training cutoff** — six months stale relative to this report's date.
- **IDs:** `microsoft/mai-code-1-flash` (repo id); the Azure/Foundry service id.
- **Context window:** **256,000 tokens (256,000 in / 128,000 out per models.dev; some catalogs list 128K)** — **a catalog conflict recorded below.**
- **Modalities:** **text in → text out.**
- **Pricing (as of 2026-11-06):** **$0.15/M input, $0.60/M output via Azure** (Oct 2026); **$0.75/$4.50 as a GitHub Copilot premium-request route** — **two rate cards for the same model, recorded side by side below.**
- **Architecture:** **sparse MoE transformer, 137B total / 5B active**; training data inherited from the MAI-Thinking-1 base plus code-specific mid-training and synthetic SWE task generation at scale.

### Raw benchmarks found

Vendor-reported (Microsoft AI's launch post and Copilot flight data) and carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists for cross-check. Comparison figures in parentheses are the baseline.

- **SWE-bench Verified: 71.6%** (66.6) — **with up to 60% fewer output tokens**
- **SWE-bench Pro: 51.2%** (35.2); **SWE-bench Multilingual: 65.5%** (62.7)
- **Terminal Bench 2: 54.8%** (41.6)
- **AIME 2026: 92.5%** (83.3); **GPQA Diamond: 84.6%** (73.2); **Frontier Science: 58.2%** (42.3)
- **IF Bench: 75.0%** (46.1); **τ²-Bench telecom: 71.7%** (54.7)
- **GDPval-AA: 735** (Haiku 4.5: 907 — **the one row where Haiku leads**)
- **Outperforms Claude Haiku 4.5 and GPT-5.4 Mini on code-survival, commit-survival and accept rates**; **11% lower median token usage vs Haiku, 13% vs GPT-5.4 Mini**
- **Auto A/B flights: 11% higher 2-day repeat usage than Haiku 4.5, 6% higher than GPT-5.4 Mini**
- **No verified public score found** for HLE, CritPt, AA-LCR, MRCR, ARC-AGI, MATH, MMLU-Pro, the AA Intelligence Index, AA-Omniscience, LiveCodeBench, AA-SciCode, the AA Coding Index, MCP-Atlas, Toolathlon, OSWorld, the AA Agentic Index or any visual benchmark.

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the mid band's top. **τ²-Bench telecom 71.7%, IF Bench 75.0% and Terminal Bench 2 54.8%** are solid mid-band; **GDPval-AA 735 — below Haiku 4.5's 907** — and the **absence of any MCP-Atlas, Toolathlon, OSWorld, BFCL or AA Agentic Index figure** keep it out of the upper band, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 66/100.** Mid-band. **AIME 2026 92.5%, GPQA Diamond 84.6% and Frontier Science 58.2%** are upper-mid-band; held there rather than higher by **the total absence of HLE, CritPt, AA-LCR, ARC-AGI, MATH, MMLU-Pro, the AA Intelligence Index and AA-Omniscience** and by the **December-2025 training cutoff**, which caps it on recency of knowledge even where the benchmark figures are strong.
- **Context window: 72/100.** **256,000 tokens** is the methodology's 200K–500K band (65–84), above the floor because 256K is a genuine asset for a code model and **no published retrieval curve exists** (no MRCR, RULER or AA-LCR figure). **A catalog conflict is recorded rather than reconciled: models.dev lists 256,000 in / 128,000 out while some catalogs list 128K**, the larger figure used because it is the vendor-side record.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 66/100.** Mid-band's top, and the strongest dimension. **SWE-bench Verified 71.6% and SWE-bench Pro 51.2% (+16 over Haiku 4.5)** are strong for 5B active, **SWE-bench Multilingual 65.5%** corroborates, and **Terminal Bench 2 54.8%** is mid-band. Held below the frontier tier by **the absence of SWE-Pro frontier-tier scores** (51.2% is mid, not frontier) and of **LiveCodeBench, AA-SciCode, the AA Coding Index, DeepSWE and Vibe Code Bench**, so all three coding references are unmeasured. **The 60%-fewer-output-tokens and 11%-lower-median-token-usage figures are recorded as efficiency evidence, not capability evidence** — a real and distinctive property, but a different axis from benchmark quality.
- **Cost efficiency: 97/100.** **$0.15/$0.60 per million tokens with 5B active parameters and 60%-fewer-token efficiency** — near the methodology's ~$0.1/$0.2 → 97–99 tier, and the cheapest route to Haiku-4.5-beating coding quality in this batch. **A pricing-structure conflict is recorded rather than reconciled: the Azure route is $0.15/$0.60 while the GitHub Copilot premium-request route is $0.75/$4.50**, five times higher; the Azure figure is used because it is the metered per-token route and the Copilot route is a subscription-bundle price. Held at 97 rather than 100 because the model is **proprietary with no weights and no self-hosting path**.
- **Overall Score: 55/100.** (58 + 66 + 72 + 12 + 66) / 5 = 54.8 → **55**. **A disagreement is recorded rather than reconciled: the repo queue carries 63 for this slug while this report reads 55**, and with BenchLM absent there is no third instrument to arbitrate — the queue figure is the corpus-average of other research agents' raters, this report is Step 5 Preview's own normalized reading, and the two are stated side by side rather than flattened. Recommendation: **the efficiency coding workhorse of mid-2026** — Haiku-4.5-beating coding quality at 5B active and $0.15/$0.60, with up to 60% fewer output tokens and 11% higher repeat usage in Copilot A/B flights, which is a genuinely strong efficiency story for high-volume code completion inside the Copilot harness. Three cautions: **superseded within two months by MAI-Code-1.1-Flash**, so this is a legacy SKU; **its December-2025 training cutoff is six months stale** relative to this report; and **every figure is vendor-reported with no independent run anywhere**, including the A/B flight data, so the whole record rests on Microsoft's own measurements.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `mai-code-1-flash` page in any spelling** (`mai-code-1-flash`, `mai-code-1-1-flash` and `MAI-Code-1-Flash` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed to Microsoft AI's launch post and Copilot flight data, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly** — which matters more here than elsewhere, because **every row in the file is vendor-reported, including the A/B flight data, with no independent measurement of any kind**. **Two conflicts are recorded rather than reconciled: the context catalog conflict (models.dev's 256,000 in / 128,000 out against some catalogs' 128K) and the pricing-structure conflict (the Azure metered route at $0.15/$0.60 against the GitHub Copilot premium-request route at $0.75/$4.50, five times higher)**, with the choice made explicitly in each case and the alternative named. **The efficiency figures are separated from the capability figures by category rather than pooled**: the 60%-fewer-output-tokens, 11%-lower-median-token-usage and 11%-higher-2-day-repeat-usage rows are recorded as efficiency and adoption evidence and explicitly not as capability evidence, because conflating them would inflate the capability reading. **The one row where the comparison baseline wins is surfaced rather than omitted: GDPval-AA 735 against Haiku 4.5's 907**, the single figure in the file that runs against the model. **The December-2025 training cutoff is attributed as the reason the reasoning score is capped on recency even where the benchmark figures are strong.** **A model-difference is recorded rather than resolved: the repo queue carries 63 while this report reads 55, with BenchLM absent so no third instrument exists to arbitrate.** Missing benchmarks (HLE, CritPt, AA-LCR, MRCR, ARC-AGI, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience, LiveCodeBench, AA-SciCode, AA Coding Index, MCP-Atlas, Toolathlon, OSWorld, AA Agentic Index, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI — MAI-Code-1-Flash launch post (primary source; benchmark table and A/B flight data)](https://www.microsoft.com/en-us/ai/ai-insights/mai-code-1-flash)
  - [Microsoft Foundry / Azure — MAI-Code-1-Flash pricing and service record](https://azure.microsoft.com/en-us/products/ai-foundry)
  - [GitHub Copilot — model picker documentation (the $0.75/$4.50 premium-request route)](https://docs.github.com/en/copilot)
  - [Repo curated meta — `model/mai-code-1-flash/meta.json` (256K/128K, text-only, dual pricing)](https://models.dev/models/microsoft-mai-code-1-flash)
  - See also: [`model/mai-code-1.1-flash/`](mai-code-1.1-flash.md) — the successor this report is superseded by, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
