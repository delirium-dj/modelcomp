# Fledge Alpha — findings by Mimo v2.6 Flash

- Source: unclaimed/anonymous (hosted as `opencode/fledge-alpha`, OpenCode Zen)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (listed as Fledge Alpha Free on OpenCode Zen)
- **Short description:** anonymous free-preview reasoning model that appeared on OpenCode Zen on 2026-10-01 with no lab claiming it; independent testing suggests it is a router backed by very fast underlying models. Top use case: free exploratory coding, quick reasoning and long-context retrieval inside the OpenCode harness.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha` / `fledge-alpha-free` route — OpenAI-compatible Chat Completions at `https://opencode.ai/zen/v1` (pi.dev provider config); also `stealth/fledge-alpha` BYOK on AnyRouter; absent from OpenRouter / Cline / Command Code at launch (harness check 2026-10-01).
- **Release / knowledge:** first recorded usage 2026-09-30, listed on OpenCode Zen 2026-10-01, specs on models.dev 2026-10-02; knowledge cutoff unknown; developer unknown.
- **IDs:** `opencode/fledge-alpha`, `fledge-alpha-free` (Zen); AnyRouter `stealth/fledge-alpha`.
- **Context window:** 1,048,576 (1M) tokens, 131,072 (131K) max output (models.dev via pi.dev and AnyRouter; modelcompare.dev lists 1.05M) — how verified: provider metadata, not a vendor card (maker unknown).
- **Modalities:** text + image in; text out; reasoning yes — effort low/high/max; tool calls yes; structured output: not reported; open weights: no.
- **Pricing (as of 2026-10-05):** $0 in / $0 out / $0 cache per 1M — free preview route (models.dev via pi.dev rate table); OpenCode telemetry shows $0 recorded spend across 12B tokens (Oct 2 snapshot). Caveat: an unclaimed stealth model has no accountable data-handling policy, and the free price is a preview condition that can change without notice.
- **Architecture:** not disclosed. Independent tokenizer test suggests a router: identical prompts counted 7,536 input tokens twice, then 6,499 (Stealth Models, 2026-10-02); circulating origin claims (DeepSeek, Inkling) are explicitly unconfirmed guesses.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**
- Custom agentic battery (non-standard, single-harness): **15/15** tasks solved across 15 runs on OpenCode 2.0.14 (Fellipe Soares, 2026-10-02) — median 21 turns, 23 tool calls, 157 s/task, 91% cache hit; efficiency poor: 1 tool call per turn vs 1.6 for the comparator, cost 2.5× Space Bunny when normalized to DeepSeek V4.1 Flash pricing ($0.00946 vs $0.00376/task)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Stealth Models research, 2026-10-03 — 36/39 correct, 95% Wilson CI 79.7–97.3; max reasoning, no tools, via OpenCode CLI; same-question comparator Space Bunny 82.1%)
- MMLU-Pro: **92.0%** (Stealth Models, 92/100, 95% CI 85.0–95.9; comparator 77.0%)
- HLE: **25.4%** text-only (Stealth Models, 17/67 answered, 95% CI 16.5–36.9; on the 66 shared questions: Fledge 25.8% vs Space Bunny 30.3%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (not indexed by AA/BenchLM — stealth listing)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**; provisional non-standard evidence only — 61/61 executable code checks and 6/6 math checks in a user-run battery (@MikelEcheve early report, 2026-10-01, methodology unreported); 15/15 custom bug-fix tasks (Fellipe Soares, above); SVG generation quality rated inconsistent across six scenes (Stealth Models)

Long context:

- No MRCR / RULER / GraphWalks figure published — 1M window is provider metadata only; provisional non-standard evidence: 12/12 hidden-key retrievals from inputs of up to ~1M characters (user-run test, 2026-10-01; characters ≠ tokens, methodology unreported); OpenCode telemetry shows 1.6M average tokens/session with 93% input-cache ratio (usage, not quality)

### Normalized scores (1–100)

- **Tool use: 48/100.** Tool calls are supported and a custom agentic battery went 15/15, but every standard reference (TB2.1, Tau3, GDPval, Claw-Eval, MCP-Atlas) is missing and the one measured agentic run is inefficient (1 call/turn, 157 s, 2.5× normalized cost) — capped at the low-mid band by the total absence of a standard tool benchmark.
- **Reasoning: 82/100.** GPQA Diamond 92.3% clears the 90% frontier and MMLU-Pro 92.0% is outstanding, but HLE 25.4% sits far under the 40% frontier (and behind its same-question comparator), and there is no Intelligence Index, LCR or CritPt number to complete the picture — that gap caps it.
- **Context window: 90/100.** A listed 1M window (≥1M tier) with a 12/12 ~1M-character key-retrieval anecdote and heavy real-world 1.6M-token sessions; capped below the 95–100 tier band because no formal retrieval benchmark (MRCR/RULER) exists for a model whose underlying weights are unverified — the window is metadata, not a measured limit.
- **Multimodal: 65/100.** Image input is catalogued (mid of the +image-in 60–70 band), but zero vision benchmarks were found and output is text-only — no MMMU/CharXiv-style evidence to justify anything higher.
- **Coding: 62/100.** SWE-bench, LiveCodeBench, SciCode and Terminal-Bench all return no verified public score found; the only evidence is non-standard — 15/15 custom fixes, 61/61 user code checks, inconsistent SVG output — enough to avoid the floor but capped far below the mid band that requires a standard suite.
- **Cost efficiency: 100/100.** $0 input / $0 output / $0 cache on the Zen preview route, $0 recorded spend in OpenCode telemetry — the methodology's $0 = 100, with the standing caveat that an anonymous preview price can vanish without notice.
- **Overall Score: 69/100.** Half-up mean of the five quality dims (48+82+90+65+62)/5 = 69.4 → 69 — best-fit: a zero-cost, long-context free preview worth trying for exploratory coding and retrieval, but unproven on any standard agent/coding leaderboard.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Stealth Models independent test suite, Fellipe Soares harness battery, AnyRouter/pi.dev/modelcompare.dev specs, OpenCode telemetry, early user reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
