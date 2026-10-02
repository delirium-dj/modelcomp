# Space Bunny Alpha — findings by Muse Spark 1.3

- Source: Stealth/Space Bunny Alpha (`opencode/space-bunny-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (Free preview)
- **Short description:** Anonymous stealth preview reasoning model from an undisclosed third-party provider for coding, agentic tasks, tool use, and multimodal input. Top use case is coding and large-context research during the free preview.
- **Provider / access:** OpenCode Zen `opencode/space-bunny-free` (OpenAI-Completions compatible, `https://opencode.ai/zen/v1`); also listed as `stealth/space-bunny-alpha` on OpenRouter. Chat Completions API.
- **Release / knowledge:** 2026-09-23 preview release (OpenRouter listing); knowledge cutoff unknown — no verified cutoff found.
- **IDs:** `opencode/space-bunny-free` (Free preview ID on Zen; vendor undisclosed; OpenRouter ID `stealth/space-bunny-alpha`)
- **Context window:** 1M tokens total (1,000,000 per OpenRouter; 1,048,576 per Pi.dev), 524,288 max output — verified via endpoint listings only, not via capability measurement.
- **Modalities:** Text/image/video in; text out; reasoning yes (adjustable effort low through max); tool calls yes; structured output yes per Pi.dev compat flags; JSON mode supported via strict mode.
- **Pricing (as of 2026-09-27):** $0 / $0 per 1M input/output tokens (free limited-time preview on OpenRouter and OpenCode Zen); zero-retention and no-training terms on the OpenCode Zen route; OpenRouter route notes provider may retain prompts/completions.
- **Architecture:** Proprietary (undisclosed vendor — no parameter count, license, or weights published).

### Raw benchmarks found

Agent / tool use:

- AI BENCHY private suite, medium effort (aibenchy.com, 2026-09-24): **score 6.3, attempt pass rate 54.6% (36/66 attempts), 10/22 tests fully passed, reliability 10.0, consistency 8.5, rank #214** (harness: 22 tests x 3 runs; 1 invalid tool call, 1 instruction-follow failure noted)
- AI BENCHY private suite, low effort (aibenchy.com, 2026-09-24): **score 5.9, pass rate 54.5%, 8/22 tests correct, rank #250** (harness: same suite, low reasoning effort)
- Field guide repeated-request probes (blog.buildfastwithai.com, 2026-09-24): **14/14 successful repeated text and image requests; 8/8 correct color-image probes**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA entry as of 2026-09-27; AI BENCHY score 6.3–6.5 is a private-suite composite, not the AA Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (OpenRouter lists "strong coding capabilities" as vendor positioning only, no measured number)

Long context:

- Field guide long-context probe (blog.buildfastwithai.com, 2026-09-24): **3/3 hidden codes recovered from ~200K-token input** (ad-hoc probe, not MRCR/RULER harness)
- MRCR / RULER / GraphWalks at 512K+: **no verified public score found** (1M context and 524K max output are endpoint-listing ceilings only)
- Throughput (TokenDyno via field guide, 2026-09-24): **89.9 tok/s on OpenCode Go, 74.5 tok/s on OpenCode Zen** (route measurement, not a quality benchmark)

### Normalized scores (1–100)

- **Tool use: 60/100.** AI BENCHY 54.6% pass rate with 10.0 reliability and successful repeated-request probes show functional tool calling; capped by the invalid tool call, instruction-follow failure, and absence of Terminal-Bench/Tau/GDPval numbers.
- **Reasoning: 55/100.** Adjustable reasoning effort (low–max) with AI BENCHY 6.3 composite and mid-pack rank #214; capped by zero standard reasoning benchmarks (no GPQA/HLE/Index).
- **Context window: 95/100.** 1M total per tier mapping (95–100 band); capped at 95 because the only measured retrieval is a ~200K ad-hoc probe, with no 512K+ MRCR/RULER score; 524K max output noted as ceiling.
- **Multimodal: 80/100.** Text/image/video in covers the video tier (75–90); capped because output is text-only, with no measured vision benchmark beyond 8/8 ad-hoc color probes.
- **Coding: 65/100.** Vendor "strong coding" positioning plus mid-pack agentic pass rate suggest usable coding; capped by zero SWE-bench/LiveCodeBench/DeepSWE/SciCode numbers.
- **Cost efficiency: 100/100.** $0 input/output during the limited free preview on both OpenRouter and Zen.
- **Overall Score: 71/100.** Mean of the five quality dims (60+55+95+80+65)/5 = 71.0; best fit as a free large-context coding and multimodal agent experiment while the preview lasts, with per-route privacy terms checked before use.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (OpenRouter stealth page, Pi.dev endpoint listing, modelcompare.dev catalogue, AI BENCHY comparisons 2026-09-24, buildfastwithai field review 2026-09-24, spacebunnyalpha.com research cards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
