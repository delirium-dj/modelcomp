# Fledge Alpha — findings by Space Bunny

- Source: OpenCode Zen (`opencode/fledge-alpha-free`); developer undisclosed, also routed as `stealth/fledge-alpha` (anyrouter/OpenRouter)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (listed as *Fledge Alpha Free* on OpenCode Zen)
- **Short description:** An anonymous, free preview model on OpenCode Zen that appeared in the catalog on 2026-10-01 and is widely treated as a **multi-model routing gateway** rather than a single set of weights. Best understood as a no-cost OpenCode route for exploratory coding and long-context retrieval, with uneven and effort-dependent output quality. Not an alias of a named entry in this dataset, though tokenizer fingerprints suggest DeepSeek V4.1- and Kimi-class backends sit behind it.
- **Provider / access:** OpenCode Zen as `opencode/fledge-alpha-free` (Chat Completions; also exposed in OpenAI-, Anthropic- and reasoning-compatible shapes according to community reports), plus `stealth/fledge-alpha` on anyrouter (`POST https://anyrouter.dev/api/v1/chat/completions`).
- **Release / knowledge:** Catalog addition 2026-10-01 (LLM Directory, modelcompare.dev); identity and knowledge cutoff not disclosed.
- **IDs:** `opencode/fledge-alpha-free` (Zen, $0 preview); `stealth/fledge-alpha` (anyrouter, $0). A Free ID does exist, so no paid Zen ID is required.
- **Context window:** 1,048,576 tokens total with 131,072 max output, per the OpenCode catalog on models.dev as mirrored by LLM Directory and modelcompare.dev (verified 2026-10-03). Caveat: OpenCode's own usage page lists context and output as *Unknown*, and no vendor has confirmed the window; treat 1M as catalog-listed, not vendor-certified.
- **Modalities:** text and image in; text out; reasoning with selectable effort (low / high / max); tool calling (function calling) supported; JSON/structured output support is not reported.
- **Pricing (as of 2026-10-03):** $0 input / $0 output per 1M on the Zen preview route and on anyrouter; $0.00 total spend and $0.00 average cost per session on OpenCode (opencode.ai/data/unknown/fledge-alpha). OpenCode's Zen docs state that during a free period collected data may be used to improve the model, so this tier should be treated as trainable — keep proprietary source and customer data off it. No separate retention promise can be verified from the undisclosed operator.
- **Architecture:** Proprietary service, weights never released. Stealthmodels.com's repeated tokenizer probes returned 7,536, 7,536 and 6,499 input tokens for the same prompt, which points to routing across backends; a community fingerprinting write-up claims at least three backends (DeepSeek V4.1, a Kimi-class model, one unknown) behind an sglang gateway. Unconfirmed.

### Raw benchmarks found

> No vendor or independent-leaderboard benchmark exists for Fledge Alpha. The measured
> numbers below are public, dated and attributable, but all come from third-party probes
> rather than a standardized harness — treat the quality scores as provisional.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Executable-code spot checks: **61/61 checks passed**, against LongCat 59/61 in the same run and a Nemotron timeout (X post by @MikelEcheve, reported by promptblueprints.tech, 2026-10-02; user-run, not a formal benchmark)
- Tool calling: **supported** (models.dev catalog / anyrouter capability list, 2026-10-03); no tool-call accuracy measurement published

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / MRCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **not listed** (no entry on Artificial Analysis or BenchLM as of 2026-10-03)
- Math spot checks: **6/6 passed**; logic spot checks: **4/4 passed** (same @MikelEcheve probe, promptblueprints.tech report, 2026-10-02; reasoning effort was not pinned, so the numbers cannot be attributed to a mode)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- SVG generation set: six 2,048-output-token runs at low effort, quality ranging from "basic sketches to carefully composed scenes" — qualitative only, **no numeric score published** (stealthmodels.com, 2026-10-02)
- Inline artifact build ("a very good crew" scene): qualitative showcase, no score (stealthmodels.com)

Long context:

- Hidden-key retrieval: **12/12 passed** on inputs of up to ~1,000,000 characters (X post by @MikelEcheve, reported by promptblueprints.tech, 2026-10-02). Note ~1M characters is roughly 250K tokens, so this is *not* a retrieval-at-1M-window result; promptblueprints explicitly warns against reading it as one.
- No MRCR / RULER / GraphWalks result at the catalog-listed 1M window found.

Throughput / adoption (measured, not quality):

- Output speed: **~61 tokens/s**, mean of six 2,048-token generation tests at low reasoning effort, reasoning tokens included (stealthmodels.com, checked 2026-10-02)
- Tokenizer probe: 7,536 / 7,536 / 6,499 input tokens for one identical prompt (stealthmodels.com)
- OpenCode usage: rank **#15** by last-week token volume, 451B tokens (Aug 9 – Oct 3), 7.7K unique users, 240,992 completed sessions, 1.9M average tokens/session, 93% input-cache ratio, $0.00 total spend (opencode.ai/data/unknown/fledge-alpha, 2026-10-03)
- Adoption velocity: 1 → 1,818 users in two days (@MikelEcheve, promptblueprints.tech)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.

- **Tool use: 45/100.** Tool calling is declared in the catalog and the only agentic evidence is one user-run probe passing 61/61 executable-code checks (best of a three-way comparison). Capped far below the mid band (TB2.1 45–60%) because Terminal-Bench, Tau3 and GDPval are all absent, and the routing fingerprint (same prompt → 7,536/6,499 tokens) implies non-reproducible behaviour between calls.
- **Reasoning: 45/100.** Best available evidence is 6/6 math and 4/4 logic spot checks from a single un-pinned-effort probe; no GPQA, HLE, MRCR, LCR, CritPt or Intelligence Index figure exists. Deliberately scored below the methodology's mid band (GPQA 60–80% / Index 20–35 → 55–65) because nothing comparable to those was measured, and observers report the route "often rushes to a simple answer".
- **Context window: 95/100.** Catalog-listed 1,048,576 total (models.dev via LLM Directory / modelcompare.dev) places it in the ≥1M = 95–100 tier. Not 100: no ≥98% retrieval at 512K+ is published, the one retrieval probe (12/12) topped out around ~250K tokens of real text, and the operator lists context as unknown.
- **Multimodal: 65/100.** Text + image input with text output matches the +image-in = 60–70 band. No video, PDF or audio input and no non-text output, so the 75+ bands do not apply; vision is catalog-declared but never independently benchmarked.
- **Coding: 48/100.** 61/61 on a small executable-code set and a showcase SVG scene show real competence, but there is no SWE-bench, LiveCodeBench, SciCode, DeepSWE or Coding Index number, and the six SVG runs swung "from basic sketches to quite good" with higher effort not consistently helping. Provisional, evidence-thin.
- **Cost efficiency: 97/100.** $0 in / $0 out confirmed on both the Zen preview route and anyrouter, with $0.00 recorded OpenCode spend and a 93% cache ratio. Held 3 points under a flat $0 = 100 because it is an explicitly limited-time free preview whose prompts OpenCode says may be used to improve the model during the free period.
- **Overall Score: 59.6/100.** Mean of (45 + 45 + 95 + 65 + 48) / 5 = 59.6. Best fit as a zero-cost exploratory route — smoke-testing a new agent loop, drafting throwaway scripts, or pulling a key out of a long document — and nothing more: no model behind it has published a single standard benchmark, so it should not be a production dependency.


---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (OpenCode catalog via models.dev mirrors, LLM Directory, modelcompare.dev, anyrouter, stealthmodels.com, opencode.ai usage telemetry, promptblueprints.tech coverage of the @MikelEcheve probe, NodeLoc community fingerprinting); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Fledge_Alpha.md`, using the same headings.
