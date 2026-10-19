# Cat Jam — findings by Nemotron 3.5 Super VL 120B A12B

- Source: commandcode.ai/models/cat-jam-free (pricing & benchmarks), modelbenchmark.io/models/cat-jam (specs & lifecycle), stealthmodels.com/cat-jam (benchmarks & access evidence), llmdir.com/models/opencode/13134-cat-jam-free (LLM Directory specs), defapi.org/model/stealth/cat-jam-free (API page), opencode.ai/data/compare pages (vs MiMo-V2.6/2.5 Pro)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam (stealth / cat-jam:free)
- **Short description:** Anonymous stealth reasoning model for coding and agentic work, released via OpenCode Zen (later also on Vercel AI Gateway); text-only; free ($0) while the stealth preview lasts; reasoning yes; tool calling yes; structured JSON output yes. Release date variously listed 2026-10-12 / 2026-10-13 / 2026-10-15. OpenCode replaced Cat Jam with Beam Free on ~2026-10-16; Cat Jam remains on Vercel.
- **Provider / access:** OpenCode Zen (`stealth/cat-jam:free`), Vercel AI Gateway (`stealth/cat-jam`), defapi.org. Free during stealth preview.
- **Release / knowledge:** Announced by OpenCode on X 2026-10-13 ("Cat Jam (stealth model) is now free in OpenCode — very fast — built for agentic coding"); stealthmodels.com registry date 12 Oct, public announcement 13 Oct, OpenCode replacement 16 Oct. Original developer unconfirmed; stealthmodels.com evidence ties Cat Jam to Reflection AI (Cat Jam identified as a Beam preview).
- **IDs:** `stealth/cat-jam`, `cat-jam-free`, `opencode/cat-jam-free`. No HF repo confirmed.
- **Context window:** Conflicting reports: 262,144 tokens (llmdir.com, models.dev-style), 1M tokens (modelbenchmark.io, stealthmodels.com), 1.05M tokens (commandcode.ai). Not definitively resolved.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (selectable effort low→max per defapi); tool calling yes; structured JSON output yes.
- **Pricing (as of 2026-10-16):** $0.00 /M input, $0.00 /M output, $0 cache reads (free while stealth deal runs).
- **Architecture:** Undisclosed — no parameter count, MoE/dense, or training recipe published. open_weights = no per modelbenchmark.io.

### Raw benchmarks found

Public benchmark coverage is minimal; most listings show "not yet scored" or dash values.

Agent / tool use: No scored agent benchmarks (Terminal-Bench, BrowseComp, MCP Atlas, etc.) found in public sources.

Reasoning / knowledge: Artificial Analysis Intelligence Index "not yet scored" (commandcode.ai). StealthMark General Intelligence ranks 37th out of 49 (stealthmodels.com); overall StealthMark 34.4/100 (rank 37/49, 30 Sept 2026 snapshot). Visual Intelligence ranks 35th/49; score 30.3/100. No MMLU/GPQA/HLE scores found.

Coding: No LiveCodeBench/SWE-bench/HumanEval scores found in public sources. Positioned as "built for agentic coding" but no public coding benchmark evidence.

Multimodal & grounded: Text-only; StealthMark visual tasks (Selfie SVG 54.6/100, Newton's Mirror SVG 58.0/100) are synthetic illustration tasks, not standard vision benchmarks.

Long context: Declared context 262K–1.05M (conflicting); no public retrieval/needle score.

Instruction following: No public IFEval/IFBench scores found.

### Conflicting results noted

- Context window: 262K (llmdir.com) vs 1M (modelbenchmark.io) vs 1.05M (commandcode.ai) — no authoritative resolution; treat as undisclosed.
- Identity/developer: unconfirmed; stealthmodels.com evidence suggests Cat Jam is a Reflection AI Beam preview, but OpenCode's announcement did not name a developer.
- OpenCode replaced Cat Jam with Beam Free (~2026-10-16), yet Cat Jam remains listed on Vercel — availability is inconsistent across providers.
- Pricing/benchmark pages conflict on whether intelligence/coding indexes are scored (commandcode.ai: "not yet scored"; stealthmodels.com: StealthMark 34.4/100).

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. **Evidence is extremely thin** (no standard benchmarks; only StealthMark composite); dimensional scores are low-confidence best estimates.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** Positioned for agentic coding with tool calling + JSON output, but zero public scored agent benchmarks; low-confidence floor estimate.
- **Reasoning: 40/100.** StealthMark General Intelligence 34.4/100 (rank 37/49); Intelligence Index not scored; no standard reasoning benchmarks → low confidence.
- **Context window: 70/100.** Declared 262K–1.05M (conflicting, unresolved); no public retrieval score; low confidence.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal (StealthMark SVG illustration tasks are not standard vision benchmarks).
- **Coding: 40/100.** Positioned for agentic coding but zero public scored coding benchmarks; low-confidence floor estimate.
- **Cost efficiency: 95/100.** Free ($0) during stealth; not counted toward Overall.
- **Overall Score: 48/100.** Half-up mean of (40 + 40 + 70 + 50 + 40) / 5 = 48.0 → 48, but with very low confidence; treat as directional only pending standard benchmark publication.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Command Code pricing/benchmarks + modelbenchmark.io specs + stealthmodels.com benchmarks/access + LLM Directory + defapi.org API page); scores are normalized 1–100 interpretations, not official vendor scores. Evidence base is minimal — treat all scores as low-confidence.
- Future sources: add a new file next to this one, using the same headings.
