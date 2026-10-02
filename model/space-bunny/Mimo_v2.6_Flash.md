# Space Bunny Alpha — findings by Mimo v2.6 Flash

- Source: Stealth (anonymous provider)/Space Bunny Alpha — OpenCode Zen `opencode/space-bunny-free`, OpenRouter `stealth/space-bunny-alpha`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (anonymous stealth preview; free limited-time Zen tier as "Space Bunny Free")
- **Short description:** Anonymous stealth reasoning model for coding, agentic tasks and multimodal input, surfaced on OpenRouter and OpenCode on 2026-09-23 with a free preview. Vendor undisclosed; independent tokenizer fingerprints point strongly to the MiniMax family (an M3.1 checkpoint is a hypothesis only, unconfirmed).
- **Provider / access:** OpenCode Zen `opencode/space-bunny-free` (Chat Completions, `https://opencode.ai/zen/v1/chat/completions`; zero-retention, no training on data per Zen route terms) and OpenRouter `stealth/space-bunny-alpha` (Chat Completions; OpenRouter is the gateway only — the anonymous provider may retain prompts/completions).
- **Release / knowledge:** 2026-09-23 (OpenRouter listing date; AI BENCHY research page dated 2026-09-24); knowledge cutoff not published.
- **IDs:** `opencode/space-bunny-free` (Zen Free ID exists) / `stealth/space-bunny-alpha` (OpenRouter).
- **Context window:** 1,000,000 tokens input, 524,288 max output tokens (OpenRouter model page, verified 2026-09-24).
- **Modalities:** text/image/video in; text out; reasoning **mandatory** (efforts `low`/`medium`/`high`/`xhigh`/`max`, provider default `max`); tool calling, tool choice, structured output supported; JSON output yes, JSON Schema enforcement not listed (field guide via buildfastwithai review). No audio/PDF input reported.
- **Pricing (as of 2026-09-25):** Free during the stealth preview — OpenRouter lists $0.00 input / $0.00 output, and the Zen route is a limited-time free tier ($0); third-party hosts differ (NanoGPT lists $0.050/$0.150 per 1M "Auto"). Post-preview pricing unknown. Privacy differs by route: Zen = zero-retention/no-training; OpenRouter stealth route = provider may retain prompts/completions.
- **Architecture:** undisclosed — no parameter count, model card, license or open weights published. Independent probes speculate a sparse MoE with ~20–35B active parameters (margrop.net, unverified); tokenizer matches MiniMax-family signatures 24/24 and 50/50 on test strings (YFarmX study, cited by buildfastwithai).

### Raw benchmarks found

> Measured numbers with source/harness. Missing rows say "no verified public score found" — nothing below is invented.

Agent / tool use:

- AI BENCHY **Tool Calling**: **10.0/10** (1/1 test passed, reliability 10.0 — AI BENCHY model page, `stealth/space-bunny-alpha::xhigh`, tested 2026-09-24)
- AI BENCHY **Data parsing and extraction**: **10.0/10** (2/2 tests, reliability 10.0)
- Tau2/Tau3-Bench, Terminal-Bench 2.x, OSWorld, GDPval-AA, Toolathlon, MCP-Atlas, Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- AI BENCHY **Puzzle Solving**: **7.9/10** (2/3; AI BENCHY, 2026-09-24)
- AI BENCHY **General Intelligence**: **5.0/10** (0/1 — instruction miss)
- AI BENCHY **Instructions following**: **5.6/10** (0/2); **Anti-AI Tricks**: **6.4/10** (2/4); **Combined**: **3.2/10** (0/2); **Trivia**: **3.0/10** (0/1)
- GPQA Diamond / HLE / AIME / Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (NanoGPT model page: "No benchmark data is available yet for this model")

Coding:

- AI BENCHY **Coding** category: **6.6/10** (1/3 tests; avg 10.64 s)
- AI BENCHY **overall composite**: **6.5**, rank **#204** of ~364 leaderboard entries; attempt pass rate **56.1%** (9/22 tests fully correct), reliability **10.0**, consistency **7.3**, avg response 55.53 s (AI BENCHY model page, xhigh effort, tested 2026-09-24)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: **no verified public score found**
- Qualitative only: early community reports praise planning, research and simple software-building tasks; AICrier/WorldofAI summary reports pronounced weaknesses in sandbox-coding evaluations (not a measured score)

Long context:

- Needle retrieval: **3/3** hidden codes recovered in correct order from a ~200,000-token input (independent field guide, cited in buildfastwithai review 2026-09-24)
- MRCR / RULER / GraphWalks at 512K–1M: **no verified public score found**

Multimodal:

- Image probes: **8/8** color-image identifications correct; **14/14** repeated text+image requests succeeded (field guide via buildfastwithai review, 2026-09-24)
- Video input accepted per OpenRouter spec; Video-MME / MMMU / CharXiv: **no verified public score found**

Speed (context only, not a scored dimension):

- 94.3 tok/s (OpenCode Go) and 84.9 tok/s (OpenCode Zen) 24-h averages; latest route tests 89.9 / 74.5 tok/s (OpenCode TokenDyno, via buildfastwithai)
- Independent probe: 118.5 tok/s, TTFT ~380 ms (margrop.net probe toolkit — third-party measurement)

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool calling, tool choice and structured output are supported and the model passed AI BENCHY's tool-calling test 1/1 (10.0) plus data-parsing 2/2; capped hard by the complete absence of agentic suites (Tau, Terminal-Bench, OSWorld, GDPval all `no verified public score found`) — single-test evidence cannot support a frontier agent score.
- **Reasoning: 55/100.** Mandatory multi-effort reasoning is on board and AI BENCHY Puzzle Solving is decent at 7.9, but General Intelligence 5.0, Combined 3.2 and Trivia 3.0 are weak, and no GPQA/HLE/Intelligence-Index number exists — bottom of the mid band until a standard reasoning suite is published.
- **Context window: 95/100.** 1,000,000-token window with a 524,288-token output ceiling (verified spec) maps to the ≥1M tier (95–100); held at 95 because retrieval is only demonstrated at ~200K (3/3) — the methodology's 100 requires ≥98% retrieval at 512K+, which no source reports.
- **Multimodal: 78/100.** Text/image/video input with verified image probing (8/8, 14/14) sits in the +video-in tier (75–90); no audio/PDF in, text-only out, and zero video benchmarks (Video-MME/MMMU missing) keep it out of the 90s.
- **Coding: 62/100.** AI BENCHY Coding 6.6/10 with a 56.1% overall pass rate and composite 6.5 (#204/~364) is mid-pack evidence for a coding-branded model, reinforced by qualitative community sandbox-coding weakness reports; no SWE-bench/LiveCodeBench/SciCode score exists, so it cannot enter the methodology's 65–75 mid band which assumes standard coding suites.
- **Cost efficiency: 100/100.** $0 input / $0 output on both the Zen free route and the OpenRouter stealth preview = the $0 = 100 rule; caveat: time-limited preview pricing (resellers already list $0.05/$0.15), and route-dependent data-retention terms.
- **Overall Score: 70/100.** (60 + 55 + 95 + 78 + 62) / 5 = 70 — best-fit: a free 1M-context multimodal reasoning worker worth routing experiments and long-context jobs to while the preview lasts, not a proven frontier coder; anonymous provenance means sensitive code should stay off the OpenRouter route.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (OpenRouter model page, AI BENCHY model page, buildfastwithai review with field-guide/TokenDyno citations, margrop.net probe analysis, AICrier release note, NanoGPT listing, Zen `meta.json`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
