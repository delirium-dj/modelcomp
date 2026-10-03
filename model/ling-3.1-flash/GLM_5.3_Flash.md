# Ling 3.1 Flash — findings by GLM 5.3 Flash

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's hybrid-reasoning mixture-of-experts Flash model for coding and tool-using agents, launched 2026-10-02 as the successor to Ling 3.0 Flash. BenchLM additionally ties launch-screenshot benchmark rows (September 30, 2026) to this model under the "Ant Ling" attribution — same family, one model.
- **Provider / access:** OpenRouter `inclusionai/ling-3.1-flash` (Chat Completions API); Novita `inclusionai/ling-3.1-flash-20261002` (262K context, $0/$0); Vercel AI Gateway `ling-3.1-flash` listing (BenchLM's official-card pointer); OpenCode Zen free tier `ling-3.1-flash-free`.
- **Release / knowledge:** Released 2026-10-02 (Benchable model page; models.dev listing). Launch-screenshot benchmarks surfaced September 30, 2026. Knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash` (OpenRouter); Zen Free ID `ling-3.1-flash-free` exists (models.dev + Zen catalog, $0.00/$0.00).
- **Context window:** 262K total (Benchable spec sheet, Novita endpoint 262K, models.dev `ling-3.1-flash-free.toml` 262,144/32,768). Max output 32,768 per models.dev.
- **Modalities:** text in/out only; reasoning yes (hybrid instant/reasoning); tool calls yes (tools, tool choice supported); structured outputs not listed on Benchable's feature set (no structured/JSON-mode row).
- **Pricing (as of 2026-10-03):** $0 in / $0 out on the Zen Free ID and on Novita's endpoint (Benchable "Price data is currently unavailable, suggesting potential free-tier usage"; Novita $0/$0). Long-term paid pricing not yet published.
- **Architecture:** ~560B total / 25B active per token MoE (parameter count rumoured per Benchable; vendor spec sheet not published); BenchLM labels the source type "proprietary" while the Ling family historically ships MIT open weights — open-weights status unverified for this exact model as of 2026-10-03.

### Raw benchmarks found

Agent / tool use:

- skillsBench (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **68.7%**
- AutomationBench (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **52.5%**
- CyberGym (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **87.9%**
- Finance Agent v2 (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **57.9%**
- DRACO (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **85.5%**
- Terminal-Bench 2.1: no verified public score found (TB 4.0 below is the measured terminal number)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Benchable Reasoning: **78.0%** (independent Benchable eval, 50th percentile)
- Benchable Mathematics: **91.9%** (51st percentile)
- Benchable Instruction Following: **84.0%** (88th percentile, top-3 cost efficiency in category)
- Benchable reliability: **93%** success rate across benchmarks; speed 31st percentile (Coding 22nd, Math 21st — slow for a Flash class)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM lists it unranked with no public overall)
- HealthBench Professional (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **65.3%**

Coding:

- Benchable Coding: **95.0%** (independent Benchable eval, 89th percentile)
- Terminal-Bench 4.0 (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **40.4%**
- SWE-Atlas Codebase QnA (**BenchLM**, Ant Ling launch screenshots 2026-09-30): **55.9%**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value found for the 262K window)

### Normalized scores (1–100)

- **Tool use: 58/100.** AutomationBench 52.5% and skillsBench 68.7% sit in the mid agentic band, with CyberGym 87.9% and DRACO 85.5% as strong specialist results; no Tau3/GDPval and weak terminal coding (TB4 40.4%) cap the score in the 50–70 band.
- **Reasoning: 66/100.** Benchable reasoning 78.0% (50th pct) and math 91.9% are solid, HealthBench Pro 65.3% is mid; the total absence of GPQA Diamond / HLE / LCR / Intelligence Index verification (only in-house harnesses) caps it just above the 55–65 mid band.
- **Context window: 72/100.** 262K total (models.dev 262,144/32,768) lands in the 200K–500K tier (200K = 70, scaled slightly up for 262K); 32K max output is a noted caveat, and no measured long-context retrieval caps it there.
- **Multimodal: 15/100.** Text-only input and output per Benchable and the Zen listing; no image/video/PDF input.
- **Coding: 70/100.** Benchable coding 95.0% (89th pct) is strong but in-house; SWE-Atlas Codebase QnA 55.9% and Terminal-Bench 4.0 40.4% are the only standard-harness numbers and both sit mid-to-low, so the 65–75 band is the ceiling with no SWE-bench Verified/LiveCodeBench verification.
- **Cost efficiency: 100/100.** $0 input and output on the Zen Free ID (`ling-3.1-flash-free`) and Novita's endpoint during the free period; long-term paid pricing and any training-data caveats are not yet published.
- **Overall Score: 56.2/100.** Mean of the five non-cost dims (58 + 66 + 72 + 15 + 70) / 5 = 56.2; best fit: a zero-cost text agent for precision instruction-following and structured work, not a primary coder (TB4 40.4%) and text-only.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (Benchable independent evals, BenchLM benchmark rows sourced to Ant Ling launch screenshots, models.dev/Vercel/Novita listings, OpenCode Zen catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
