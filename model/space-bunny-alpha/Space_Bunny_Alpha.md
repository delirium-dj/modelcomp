# Space Bunny Alpha — findings by Space Bunny Alpha

- Source: Space Bunny Alpha / Space Bunny Free (`opencode/space-bunny-free`; related OpenRouter ID `stealth/space-bunny-alpha`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (also listed as Space Bunny Free)
- **Short description:** Anonymous, proprietary reasoning preview offered free through OpenCode Zen and separately cataloged on OpenRouter as `stealth/space-bunny-alpha`. The underlying developer and exact checkpoint remain undisclosed; tokenizer and behavior measurements strongly match the MiniMax family but do not prove a particular model generation.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions`, model `space-bunny-free`; OpenCode Go uses the same model ID on its Go route. Related OpenRouter listing: `stealth/space-bunny-alpha` (OpenAI Chat Completions). The Zen model table, Zen pricing table, and the live `https://opencode.ai/zen/v1/models` response were all re-checked on 2026-09-29 and the route is **still present and still free**.
- **Release / knowledge:** Catalog release 2026-09-23. Independent dated-event probes support realized knowledge through at least November 2025 and not through mid-2026; these probes do not establish a formal training cutoff.
- **IDs:** `opencode/space-bunny-free`; `stealth/space-bunny-alpha` (related OpenRouter route).
- **Context window:** OpenCode/models.dev reports 1,048,576 total tokens, 524,288 input, and 524,288 output. OpenRouter reports 1,000,000 context and 524,288 maximum completion. A stealthprint context ladder completed at local prompt sizes 100K, 204.6K, 450K, and 1M with HTTP 200 responses, so the 1M-class capacity was exercised; the upper bound was not exceeded.
- **Modalities:** Text, image, and video input; text output. Mandatory reasoning with low/medium/high/xhigh/minimal effort on OpenRouter (default `xhigh`); OpenCode exposes interleaved `reasoning_content`. Tool calls are documented; structured-output mode was not independently verified.
- **Pricing (as of 2026-09-29):** OpenCode Zen's published pricing table lists **Space Bunny Free at Free / Free / Free** for input, output, and cached read, and it remains in the "free models" list described as "a stealth model that's free on OpenCode for a limited time." OpenRouter's `stealth/space-bunny-alpha` entry shows `prompt: 0, completion: 0`. OpenCode states this provider follows zero retention and does not use submitted data for training. Free access remains temporary; rate limits and duration are not published.
- **Architecture:** Proprietary and closed-weight; parameter count, architecture, and exact checkpoint are unknown. A 24-probe tokenizer fingerprint matches MiniMax M1 on 24/24 cases (MAE 0), but a shared MiniMax vocabulary cannot identify the underlying generation.

### Raw benchmarks found

Independent route-level measurements come from the pinned [stealthprint case study](https://github.com/majiayu000/stealthprint/blob/fc037456e356a881f0cdf27af44063d7515d2bf0/docs/case-space-bunny.md), its [raw JSON](https://github.com/majiayu000/stealthprint/blob/fc037456e356a881f0cdf27af44063d7515d2bf0/docs/case-space-bunny-measurements.json), OpenCode's [Zen documentation and pricing](https://opencode.ai/docs/zen/), the [Zen `/v1/models` catalog](https://opencode.ai/zen/v1/models), the [OpenRouter API catalog](https://openrouter.ai/api/v1/models), [AI BENCHY](https://aibenchy.com/), and TokenDyno. These are endpoint probes and third-party aggregations, not standardized vendor model-quality leaderboards.

Agent / tool use:

- Tool-call capability: supported by the models.dev/OpenCode metadata; no verified public SWE-bench, Terminal-Bench, Tau, GDPval-AA, or Toolathon quality score found.
- Repeated-route consistency: **14/14 HTTP 200** (seven identical text requests at temperature 2.0 and seven identical 64×64 image requests), with consistent prompt counts and response shape (stealthprint, 2026-09-24).
- Four malformed payloads all returned a normalized HTTP 400 `invalid_request_error`; this checks error handling, not tool-use accuracy.
- TokenDyno shows no Intelligence Index figure for this route (displayed as `—`), so no independent composite agentic score exists.

Reasoning / knowledge:

- No verified GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis, or BenchLM quality score found; TokenDyno likewise lists the route's Intelligence Index as `—`.
- Dated-event knowledge ladder: correctly recalled DeepSeek-R1's 2025-01-20 release, GPT-5's 2025-08-07 release, and the November 2025 month of Claude Opus 4.5; it did not know several mid-2026 models named in the probe. This is a small knowledge probe, not an accuracy percentage.
- Mandatory reasoning is documented with five effort levels, but no verified public reasoning-benchmark score was found.

Coding:

- **AI BENCHY: 56.1% pass rate, 6.5 benchmark score, 10.0 reliability, rank #204** on the current leaderboard (aibenchy.com and a corroborating independent review, accessed 2026-09-29). This is the **first third-party pass-rate measurement for this route** and is the row that lifts the coding score off the qualitative floor. Its strongest category is domain-specific performance; instruction following ranks lower.
- No verified public SWE-bench, LiveCodeBench, SciCode, or Vibe Code Bench score found.
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
- **TokenDyno, refreshed 2026-09-29:** OpenCode Zen route **72.1 tok/s 24-hour average, 69.0 tok/s current, 1.5 s TTFT, 100% 24-hour reliability** (sampled roughly hourly on capped plans). OpenCode Go route **75.2 tok/s 24-hour average, 82.6 tok/s current, 919 ms TTFT, 64% reliability** (sampled roughly every 30 minutes). The Zen figure is lower than the 2026-09-25 snapshot's 74.8/82.0 reading but remains the fastest reliable free route in the free-tier portion of the leaderboard. These are throughput and uptime results, not quality scores.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool calls and a stable five-effort reasoning interface are documented, and repeated-route consistency is perfect at 14/14, but there is no standardized tool-use quality result and TokenDyno carries no Intelligence Index for this route; endpoint consistency and normalized errors cannot establish task success.
- **Reasoning: 56/100.** Mandatory reasoning and a small dated-knowledge ladder are positive signals, while no public GPQA/HLE/independent index score verifies general reasoning quality. The score is deliberately conservative rather than a claim that the model is weak.
- **Context window: 93/100.** A 1M-token request succeeded and 3/3 distinct needles were recovered from a 200K input; the 810K needle was weaker and no run at the upper 1,048,576-token boundary established perfect full-window retrieval.
- **Multimodal: 61/100.** Text, image, and video are supported, and the synthetic color probe scored 8/8 at 64×64, but one 1×1 probe failed, AI BENCHY ranks this route's instruction-following category in its lower band, and no document, chart, OCR, or video-quality evaluation was published. Trimmed from 64 in this re-run because the new third-party evidence adds no visual-quality measurement and mildly weakens the picture.
- **Coding: 58/100.** The new **AI BENCHY row gives a real third-party pass rate of 56.1%** (score 6.5, reliability 10.0, rank #204), which is the first reproducible coding measurement for this route and lifts the score above the qualitative-example floor. It remains well below frontier coding leaders, and no SWE-bench, LiveCodeBench, or SciCode evidence exists.
- **Cost efficiency: 100/100.** The Zen pricing table and the Zen model catalog both still list the route at $0/M input and output, and OpenRouter's stealth listing shows $0/$0; the provider follows zero retention and does not train on submitted data. Availability, rate limits, and the explicitly temporary nature of the promotion remain material caveats.
- **Overall Score: 65.2/100.** Half-up mean of the five quality dimensions, Cost efficiency excluded: (58 + 56 + 93 + 61 + 58) / 5 = 326 / 5 = 65.2. Best fit as a free experimental route for million-token experiments, simple image checks, and qualitative SVG/coding exploration; evidence is not yet strong enough to recommend it for accuracy-critical production agent or coding workloads.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Independent public-web and API-catalog research using OpenCode Zen's live model table and pricing page, the Zen `/v1/models` response, OpenRouter, pinned stealthprint measurements, AI BENCHY, the independent field guide, and TokenDyno telemetry; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
