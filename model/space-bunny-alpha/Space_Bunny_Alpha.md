# Space Bunny Alpha — findings by Space Bunny Alpha

- Source: Space Bunny Alpha / Space Bunny Free (`opencode/space-bunny-free`; related OpenRouter ID `stealth/space-bunny-alpha`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (also listed as Space Bunny Free)
- **Short description:** Anonymous, proprietary reasoning preview offered free through OpenCode Zen and separately cataloged on OpenRouter as `stealth/space-bunny-alpha`. The underlying developer and exact checkpoint remain undisclosed; tokenizer and behavior measurements strongly match the MiniMax family but do not prove a particular model generation.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions`, model `space-bunny-free`; OpenCode Go uses the same model ID on its Go route. Related OpenRouter listing: `stealth/space-bunny-alpha` (OpenAI Chat Completions).
- **Release / knowledge:** Catalog release 2026-09-23. Independent dated-event probes support realized knowledge through at least November 2025 and not through mid-2026; these probes do not establish a formal training cutoff.
- **IDs:** `opencode/space-bunny-free`; `stealth/space-bunny-alpha` (related OpenRouter route).
- **Context window:** OpenCode/models.dev reports 1,048,576 total tokens, 524,288 input, and 524,288 output. OpenRouter reports 1,000,000 context and 524,288 maximum completion. A stealthprint context ladder completed at local prompt sizes 100K, 204.6K, 450K, and 1M with HTTP 200 responses, so the 1M-class capacity was exercised; the upper bound was not exceeded.
- **Modalities:** Text, image, and video input; text output. Mandatory reasoning with low/medium/high/xhigh/max effort on OpenRouter; OpenCode exposes interleaved `reasoning_content`. Tool calls are documented; structured-output mode was not independently verified.
- **Pricing (as of 2026-09-25):** OpenCode Zen lists $0/M input, $0/M cached input, and $0/M output for the limited-time free tier. OpenRouter's related stealth listing also showed $0/$0 in its 2026-09-25 API snapshot. Free access is temporary; OpenCode says this provider follows zero retention and does not use submitted data for training.
- **Architecture:** Proprietary and closed-weight; parameter count, architecture, and exact checkpoint are unknown. A 24-probe tokenizer fingerprint matches MiniMax M1 on 24/24 cases (MAE 0), but a shared MiniMax vocabulary cannot identify the underlying generation.

### Raw benchmarks found

Independent route-level measurements come from the pinned [stealthprint case study](https://github.com/majiayu000/stealthprint/blob/fc037456e356a881f0cdf27af44063d7515d2bf0/docs/case-space-bunny.md), its [raw JSON](https://github.com/majiayu000/stealthprint/blob/fc037456e356a881f0cdf27af44063d7515d2bf0/docs/case-space-bunny-measurements.json), OpenCode's [Zen documentation](https://opencode.ai/docs/zen/), the [OpenRouter API catalog](https://openrouter.ai/api/v1/models), and TokenDyno. These are endpoint probes, not standardized model-quality leaderboards.

Agent / tool use:

- Tool-call capability: supported by the models.dev/OpenCode metadata; no verified public SWE-bench, Terminal-Bench, Tau, GDPval-AA, or Toolathon quality score found.
- Repeated-route consistency: **14/14 HTTP 200** (seven identical text requests at temperature 2.0 and seven identical 64×64 image requests), with consistent prompt counts and response shape (stealthprint, 2026-09-24).
- Four malformed payloads all returned a normalized HTTP 400 `invalid_request_error`; this checks error handling, not tool-use accuracy.

Reasoning / knowledge:

- No verified GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis, or BenchLM quality score found.
- Dated-event knowledge ladder: correctly recalled DeepSeek-R1's 2025-01-20 release, GPT-5's 2025-08-07 release, and the November 2025 month of Claude Opus 4.5; it did not know several mid-2026 models named in the probe. This is a small knowledge probe, not an accuracy percentage.
- Mandatory reasoning is documented with five effort levels, but no verified public reasoning-benchmark score was found.

Coding:

- No verified public SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench, or coding-index score found.
- Five SVG experiments are showcased by the independent [Space Bunny Alpha field guide](https://spacebunnyalpha.com), but its cards provide qualitative output examples rather than a reproducible accuracy/pass rate, so they are not converted into a coding score.


Long context:

- Context acceptance ladder: 100K, 204.6K, 450K, and 1M local-token payloads all returned HTTP 200; prompt counts stayed at local MiniMax count +143 (stealthprint).
- 200,044-local-token retrieval probe: **3/3** distinct hidden codes recovered in the correct order; reported prompt size 200,187.
- 810,021-local-token retrieval probe: recovered the repeated needle (`NX80849` three times), with a reported prompt size of 810,178; the study notes that same-second code generation made this weaker evidence.

Multimodal:

- 64×64 solid-color identification: **8/8 correct** (4/4 red and 4/4 blue).
- 1×1 red-image probe: **3/4 correct**, with one black-image response; this is too small and synthetic for a general vision-quality estimate.
- Video input is listed by models.dev and OpenRouter, but no verified video-understanding accuracy score was found.

Speed and reliability telemetry:

- OpenRouter snapshot around 2026-09-24 00:28 UTC: **87 tok/s P50**, **1.07 s P50 latency**, and **94.98%** three-day inference availability.
- TokenDyno OpenCode Zen snapshot on 2026-09-25: latest **74.8 tok/s**, 24-hour average **82.0 tok/s**, **1.1 s TTFT**, **100%** 24-hour reliability; sampled roughly hourly with a fixed ~300-token prompt.
- TokenDyno OpenCode Go snapshot: latest **82.4 tok/s**, 24-hour average **83.7 tok/s**, **937 ms TTFT**, **83%** reliability; sampled roughly every 30 minutes. These route results are not quality scores.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool calls and a stable five-effort reasoning interface are documented, but there is no standardized tool-use quality result; endpoint consistency and normalized errors cannot establish task success.
- **Reasoning: 56/100.** Mandatory reasoning and a small dated-knowledge ladder are positive signals, while no public GPQA/HLE/independent index score verifies general reasoning quality. The score is deliberately conservative rather than a claim that the model is weak.
- **Context window: 93/100.** A 1M-token request succeeded and 3/3 distinct needles were recovered from a 200K input; the 810K needle was weaker and no run at the upper 1,048,576-token boundary established perfect full-window retrieval.
- **Multimodal: 64/100.** Text, image, and video are supported, and the synthetic color probe scored 8/8 at 64×64, but one tiny-image test made an error and no document, chart, OCR, or video-quality evaluation was published.
- **Coding: 55/100.** The model is marketed for coding and can emit code/tool requests, but no verified coding benchmark or pass rate was found; qualitative SVG examples do not warrant a higher normalized score.
- **Cost efficiency: 100/100.** The current limited-time Zen and related OpenRouter routes list $0/M input and output; availability, rate limits, and the temporary nature of the promotion remain material caveats.
- **Overall Score: 65/100.** Best fit as a free experimental route for million-token experiments, simple image checks, and qualitative SVG/coding exploration; evidence is not yet strong enough to recommend it for accuracy-critical production agent or coding workloads. Formula: half-up mean of 58, 56, 93, 64, and 55 = 65.2 → 65.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-25
- Method: Independent public-web and API-catalog research using OpenCode, OpenRouter, pinned stealthprint measurements, the independent field guide, and TokenDyno telemetry; scores are normalized 1–100 interpretations, not official vendor scores.
