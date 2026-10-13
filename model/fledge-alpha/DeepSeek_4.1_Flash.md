# Fledge Alpha — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Fledge Alpha (`opencode/fledge-alpha-free`; anonymous stealth preview) — https://opencode.ai/data/unknown/fledge-alpha
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against Stealth Models' Fledge Alpha dossier (https://stealthmodels.com/fledge-alpha), AnyRouter's catalog entry (https://blog.anyrouter.dev/releases/2026-10-02-fledge-alpha), OpenCode's own usage telemetry (https://opencode.ai/data/unknown/fledge-alpha), the OpenRouter Stealth hub (https://openrouter.ai/stealth) and models.dev/Zen metadata (https://github.com/anomalyco/models.dev/pull/8568). The academic numbers are **unchanged** from the 2026-10-03 pass (GPQA Diamond 92.3%, MMLU-Pro 92.0%, HLE 25.4%); no agentic, coding or retrieval benchmark appeared. The material change is **access**: Stealth Models reports the free OpenCode Zen preview ended on 2026-10-11 (OpenCode v1.19.0 removed the endpoint; https://github.com/anomalyco/opencode/releases/tag/v1.19.0), and Zen telemetry shows zero tokens/sessions from 2026-10-09 onward. Identity is still unconfirmed — no host, weights or knowledge cutoff. Two conflicts surfaced (see below). No verified new number justifies a score change, so all six dimensions and the Overall stay at their conservative 2026-10-03 values.

## Model card

- **Name:** Fledge Alpha (listed on Zen as Fledge Alpha Free)
- **Short description:** Anonymous stealth preview that appeared on OpenCode Zen on 2026-10-01, free at $0 with a 1M-token window, image input and three reasoning settings. Evidence from repeated tokenizer tests and uneven outputs points to a router backed by fast, undisclosed models rather than a single named lab model. Community identity guesses (DeepSeek V4.x, Thinking Machines' Inkling) remain unconfirmed.
- **Provider / access:** OpenCode Zen, selector `opencode/fledge-alpha-free` (free, no personal Zen key needed). **Access update 2026-10-11:** the Zen preview ended — the endpoint was removed in OpenCode v1.19.0 and the live catalog no longer lists it; no working public replacement endpoint is verified. AnyRouter claims a free `stealth/fledge-alpha` mirror via Novita/OpenRouter BYOK (https://blog.anyrouter.dev/releases/2026-10-02-fledge-alpha) but OpenRouter's Stealth hub lists only `ox-alpha`, `space-bunny-alpha`, `union-alpha` (https://openrouter.ai/stealth) — see conflict note.
- **Release / knowledge:** First recorded usage 2026-09-30; listed on Zen 2026-10-01; models.dev specs published 2026-10-02; Zen endpoint removed 2026-10-08→2026-10-11. Developer and knowledge cutoff unknown.
- **IDs:** `opencode/fledge-alpha-free` (models.dev / Zen); AnyRouter mirrors it as `stealth/fledge-alpha`. Repo folder id: `fledge-alpha`.
- **Context window:** 1,048,576 total / 131,072 max output (models.dev / OpenCode, verified 2026-10-02 via `fledge-alpha-free.toml` and the Zen catalog; unchanged 2026-10-11).
- **Modalities:** text + images in, text out; reasoning (low · high · max); tool calls supported; open weights not listed.
- **Pricing (as of 2026-10-11):** $0.00 in / $0.00 out on the OpenCode Zen preview (free, time-limited) — **this preview has now ended**; AnyRouter advertises a $0 stealth mirror but no first-party paid rate is published. Anonymous stealth listing, so any successor's benchmark identity may change without notice.
- **Architecture:** not disclosed. Evidence (same prompt counted 7,536 then 6,499 input tokens; inconsistent SVG quality; ~61 output tok/s) still suggests a routed service over fast models. Vendor/underlying models unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** — tool calls are listed as supported, but no agentic harness score exists (re-verified 2026-10-11).

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39 answered, 95% CI 79.7–97.3%) — Stealth Models research, 3 October 2026, max reasoning, no tools (https://stealthmodels.com/fledge-alpha).
- HLE (text-only): **25.4%** (17/67 answered, 95% CI 16.5–36.9%) — same Stealth Models run (its 66-shared-question comparison table shows 25.8%; internal harness discrepancy, https://stealthmodels.com/fledge-alpha).
- MMLU-Pro: **92.0%** (92/100, 95% CI 85.0–95.9%) — same Stealth Models run (https://stealthmodels.com/fledge-alpha).
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM `fledge-alpha` returns 404 as of 2026-10-11; https://benchlm.ai/models/fledge-alpha).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- SVG generation: Stealth Models' six-scene test ranged from simple sketches to well-composed scenes — **qualitative only, not a scored coding benchmark**; ~61 output tokens/s (https://stealthmodels.com/fledge-alpha).

Long context:

- 1,048,576-token context is catalog-listed, but **no MRCR / RULER / GraphWalks retrieval score at any window length was found** → no verified long-context retrieval number (re-verified 2026-10-11).

Multimodal:

- Text + image input, text output only. No MMMU / image-benchmark score for this ID was found; **no verified public multimodal score found** (https://stealthmodels.com/fledge-alpha).

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calls and reasoning settings are listed, but there is no Terminal-Bench / Tau3 / GDPval / Claw-Eval number (confirmed absent in the 2026-10-11 re-check); scored mid-band on the capability listing plus strong reasoning, capped by the total absence of any agentic measurement.
- **Reasoning: 88/100.** GPQA Diamond 92.3% is frontier-tier (90%+ band) and MMLU-Pro 92.0% is strong (https://stealthmodels.com/fledge-alpha); HLE 25.4% sits well below the 40% frontier reference and no Intelligence Index exists, which caps it just under 90. Unchanged — no new reasoning data.
- **Context window: 97/100.** 1,048,576 tokens lands in the ≥1M band (95–100); not 100 because no ≥98% retrieval evidence at 512K+ was found (https://stealthmodels.com/fledge-alpha).
- **Multimodal: 65/100.** Text + image input, text output only (no video/PDF/audio in, no non-text out) → the +image-in band 60–70.
- **Coding: 60/100.** No SWE-bench / DeepSWE / LiveCodeBench / SciCode result exists, and the SVG tests were uneven and qualitative; scored conservatively on reasoning strength without a measured coding result.
- **Cost efficiency: 100/100.** $0.00 input/output was listed on the OpenCode Zen preview (`fledge-alpha-free`, https://stealthmodels.com/fledge-alpha); the free preview has now ended and AnyRouter's $0 mirror is unverified, so this reflects the evaluated free tier with a time-limited/access-lost caveat (it does not count toward Overall).
- **Overall Score: 73/100.** Mean of the five quality dims (55 + 88 + 97 + 65 + 60) / 5 = 73.0. Best-fit: a free, 1M-context, image-capable reasoner for broad-knowledge and exploratory work; treat agentic/coding reliability as unproven until a same-harness score appears, and note the Zen preview is now discontinued.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: fresh public internet research (Stealth Models Fledge Alpha dossier, 2026-10-11; AnyRouter catalog entry, 2026-10-02; OpenCode telemetry `opencode.ai/data/unknown/fledge-alpha`, updated 2026-10-08; OpenRouter Stealth hub; models.dev/Zen metadata and OpenCode v1.19.0 removal PR). Scores are normalized 1–100 interpretations, not official vendor scores.
- Conflicts surfaced: (1) **availability** — AnyRouter lists a free `stealth/fledge-alpha` via OpenRouter/Novita BYOK, but OpenRouter's Stealth hub does not list fledge-alpha and OpenCode Zen removed it on 2026-10-11; (2) **HLE** — 25.4% (67-question run) vs 25.8% (66-shared comparison table) within the same Stealth Models page.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
