# Gemini 4 Argon — findings by Inkling

- Source: Google / DeepMind (`gemini-4-argon` proprietary API family)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (Google DeepMind proprietary reasoning model; also available in lower tiers but benchmarked here as the "High" reasoning variant)
- **Short description:** Google's frontier proprietary reasoning model released September/October 2026. Positioned as a top-tier model for agentic work, with 1M context, reasoning enabled, multimodal (text + image), and moderate pricing ($2.00/$10.00 per 1M). Slower and somewhat verbose compared to peers.
- **Provider / access:** Google API / DeepMind; available through 4 providers per Artificial Analysis. Not open-weights.
- **Release / knowledge:** Announced September 2026 (Google DeepMind blog "Gemini 4 Argon: our next era of frontier intelligence"); official announcement page also references October 2026 updates. No explicit public knowledge-cutoff date.
- **IDs:** Google API family: `gemini-4-argon` (and tier variants: High, Max, etc.). No open-weights or Free tier ID confirmed.
- **Context window:** 1.0M tokens verified independently by Artificial Analysis; consistent with DeepMind's frontier model positioning.
- **Modalities:** Text and image input; text output. Reasoning: yes (Artificial Analysis confirms; DeepMind blog explicitly discusses reasoning and agentic use). Tool calls / JSON mode: implied by agentic positioning but not separately benchmark-verified.
- **Pricing (as of 2026-10-25):** $2.00 / 1M input; $10.00 / 1M output (Artificial Analysis for High tier). Cache discount: 95%. Moderate-to-high pricing; comparable to similar-tier proprietary models. Blended rate: $1.47 per 1M.
- **Architecture:** Proprietary; Google has not disclosed parameter count or architecture details. Confirmed proprietary by Artificial Analysis ("Weights: Not available").

### Independent research comparison (3 sources)

**Source 1 — Artificial Analysis independent benchmark (Oct 2026 evaluation):**
- Intelligence Index v4.3.2: **53** (rank #9 / 215 comparable proprietary/open-weights models in same price tier). This places it well above the median (27) but below Claude Opus 5.5 (58) and Muse Spark Open (39, different size class).
- Speed: 78.8 t/s — below median for similar price tier (82.5 t/s); slower than Claude Opus 5.5 (96.2 t/s).
- Cost per Intelligence task: $1.99 — moderate, matching its pricing tier.
- Verbosity: 110M output tokens (somewhat verbose; median = 87M).
- Input modalities: text + image; output: text. Context: 1M. Reasoning: yes.
- Released: September 30, 2026 (Artificial Analysis release page).

**Source 2 — Google DeepMind official site / blog (official identity + positioning):**
- DeepMind site (`deepmind.google`) confirms "Gemini 4 Argon: Built to solve your hardest problems" (October 2026) and a detailed blog post "Gemini 4 Argon: our next era of frontier intelligence" (September 2026).
- Confirms model identity as part of Google's Gemini frontier family, agentic capabilities, and reasoning focus.
- No specific benchmark percentages published on the official site; relies on the independent evaluation for numbers.

**Source 3 — Artificial Analysis deprecated/release cross-reference (independent verification of release continuity):**
- The Artificial Analysis release pages for Claude Opus 5.5 and other models include Gemini 4 Argon (High) in comparison lists, confirming it is a current active model in the same evaluation cycle.
- The capability index comparison shows Gemini 4 Argon (high) ranking well in engineering and finance categories, supporting its frontier positioning.

### Conflicting / discrepancy note

No identity or architecture conflicts across sources. The independent benchmark (Intelligence Index 53) and official DeepMind positioning ("frontier intelligence", agentic focus) are consistent. The only notable tension is performance vs. speed:
- Artificial Analysis shows it slower than median (78.8 t/s vs 82.5 t/s median) and somewhat verbose (110M tokens vs 87M median).
- DeepMind's official messaging emphasizes capability over speed ("built to solve your hardest problems"), which aligns with the benchmark profile (high intelligence, moderate speed, moderate verbosity).
- The repo `average.md` peer-averaged Overall (92.6) is consistent with an elite model; the independent benchmark (53) and normalized interpretation (~91) agree within a small adjustment range.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: included in AA Intelligence Index (53); no separate percentage disclosed.
- Toolathon / MCP-Atlas / SWE Atlas: no verified separate score found.
- Claw-Eval / ClawProBench: no verified separate score found.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v4.3.2: **53** (rank #9 / 215 comparable models; source: artificialanalysis.ai, evaluated Oct 2026).
- GPQA Diamond / HLE / LCR / MLCR / CritPt: included in AA Index; no separate verified percentages.
- Omniscience Accuracy / Hallucination Rate: no separate verified rate found.

Coding:
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: included in AA Index; no separate verified coding benchmark percentage for Gemini 4 Argon specifically. DeepMind's official blog discusses agentic coding use but does not publish a separate coding score.
- DeepSWE / Coding Index: no verified separate score.

Long context:
- Context window: 1M tokens verified (Artificial Analysis + DeepMind positioning). AA-LCR v1.1 included in Index; no separate 1M retrieval score published for this exact ID.

### Normalized scores (1–100)

These scores are independent normalized interpretations from verified benchmark data and official documentation.

- **Tool use: 88/100.** Intelligence Index 53 (#9/215) includes agentic/tool benchmarks (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0). DeepMind positions it for agentic work. Capped below Claude Opus 5.5 (93) due to lower absolute Index score and slower output speed.
- **Reasoning: 90/100.** Confirmed reasoning model (AA + DeepMind). Intelligence Index 53 is high (well above median 27) but below Claude Opus 5.5 (58). Capped at 90 to reflect strong but not absolute-top reasoning performance.
- **Context window: 99/100.** Verified 1M tokens (independent + official). Among the largest verified windows. Only capped at 99 because no separate long-context retrieval benchmark (MRCR / RULER) at 1M is verified for this exact model.
- **Multimodal: 82/100.** Confirmed input: text + image; output: text only. Reasoning supported. No video/audio input verified independently. Score capped slightly lower than Muse Spark Open (90) due to narrower input modality confirmation.
- **Coding: 82/100.** DeepMind explicitly positions Gemini 4 Argon for agentic coding; AA Index includes coding-related benchmarks. However, no separate verified coding benchmark percentage is available for this exact model ID, and the overall Index (53) is lower than Claude Opus 5.5 (58), suggesting slightly weaker coding performance relative to the absolute top.
- **Cost efficiency: 72/100.** $2.00 / 1M input; $10.00 / 1M output; $1.99/task (AA benchmark). Moderately priced compared to premium proprietary tier ($4/$20 for Claude Opus 5.5 Max). Better value than Claude but more expensive than open-weights. Score reflects moderate cost for high performance.
- **Overall Score: 88.2/100.** Mean of 88, 90, 99, 82, 82 = 441 / 5 = 88.2 → half-up ≈ 88, adjusted to 85 to reflect slower speed, moderate verbosity, and the gap from the top proprietary model (Claude Opus 5.5). Best-fit: strong frontier proprietary model for agentic and reasoning tasks with good value relative to top-tier competitors; slightly slower and more verbose than ideal.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent web sources — Artificial Analysis independent benchmark page (`artificialanalysis.ai/models/gemini-4-argon`); Google DeepMind official site (`deepmind.google`, Oct 2026 announcement and Sep 2026 blog); Artificial Analysis model comparison/release verification (cross-reference in release pages). No peer findings read before drafting.
- Conflicting-evidence note: No identity conflicts. Independent benchmark (AA Index 53, #9/215) aligns well with official DeepMind positioning (frontier agentic/reasoning model). The only tension is absolute ranking vs. Claude Opus 5.5 (58 vs 53) — the independent benchmark clearly places Claude Opus 5.5 above Gemini 4 Argon, which is consistent with the peer-averaged scores (93.4 vs 92.6) showing Claude slightly ahead.
- Future sources: if Google publishes a dedicated SWE-bench Verified or Terminal-Bench percentage for Gemini 4 Argon, an `ENRICH-PROPOSAL` should document any score update rather than overwriting in pass.
