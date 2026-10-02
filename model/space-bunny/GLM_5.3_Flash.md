# Space Bunny Alpha — findings by GLM 5.3 Flash

- Source: Anonymous stealth provider (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny-free` free tier on OpenCode Zen)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (stealth preview; identity undisclosed)
- **Short description:** An anonymous third-party stealth reasoning model surfaced on OpenRouter and OpenCode on 2026-09-23, combining a 1M-token context window, text/image/video input, tool calling and mandatory reasoning at a free preview price. Independent tokenizer tests point strongly to the MiniMax family (an M3.1 identity is a hypothesis, not a confirmed fact) — the exact developer and checkpoint remain undisclosed.
- **Provider / access:** OpenRouter (`stealth/space-bunny-alpha`, OpenAI-compatible Chat Completions); OpenCode Zen free route (`space-bunny-free` ID, zero-retention, no training on your data) and OpenCode Go subscription. No Free ID on OpenCode Zen in the usual sense — the Zen route itself is the free limited-time tier.
- **Release / knowledge:** Surfaced 2026-09-23; knowledge cutoff unknown.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter); `space-bunny-free` (OpenCode Zen limited-time free route).
- **Context window:** 1,000,000 total tokens with a separate 524,288-token completion ceiling (verified via OpenRouter; reasoning tokens consume part of the same completion budget).
- **Modalities:** text, image and video input (some trackers also list audio); text output (no image/video generation); reasoning yes — mandatory, with low/medium/high/xhigh/max effort levels (provider catalog defaults to max); tool calling and tool choice; structured output (JSON supported; JSON Schema enforcement not listed).
- **Pricing (as of 2026-09-24):** $0.00 / $0.00 during the stealth preview (time-limited — not a long-term pricing promise; terms, limits or providers can change when the experiment ends). OpenRouter warns the anonymous provider may retain prompts and completions (not used for training); the OpenCode Zen free route has separate zero-retention/no-training terms.
- **Architecture:** Undisclosed — no parameter count, architecture, dataset or technical report published.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval or Toolathon score found. Tool calling is supported per OpenRouter but no standardized agentic-tool benchmark numbers exist.

Reasoning / knowledge:

- AI BENCHY: **6.5 benchmark score / 56.1% pass rate / 10.0 reliability, #204** on its tracked leaderboard (aibenchy.com, xhigh route — harness not detailed; snapshot of the preview)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Identity probes: self-claims GPT-5 in one test — not provenance evidence (tokenizer fingerprint contradicts it)

Coding:

- No verified public SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench or DeepSWE score found (community reports of good planning/software-building results are early anecdotes, not standardized scores)

Long context:

- Field test: **3/3 hidden codes recovered in correct order from a ~200K-token input** (spacebunnyalpha.com independent field guide — focused retrieval test, not a full long-context benchmark)
- No MRCR/RULER/GraphWalks value verified
- Throughput: ~89.9 tokens/sec on OpenCode Go / 74.5 on OpenCode Zen (TokenDyno route tests; 24h averages 94.3/84.9); ~1.66s average response time in one free-model monitor

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling/tool choice are supported and the model is positioned for agent work, but zero standardized agentic-tool benchmark numbers exist — score rests on thin evidence.
- **Reasoning: 55/100.** The AI BENCHY 6.5 score / 56.1% pass rate (#204) is a thin, harness-unclear snapshot; no GPQA/HLE or independent index run — conservative per the no-hallucination rule.
- **Context window: 90/100.** 1M tokens maps to the ≥1M tier (95–100) but only a focused ~200K-token retrieval test (3/3) is verified; no measured ≥98% retrieval at 512K+ and the 524K completion ceiling keep it below 95.
- **Multimodal: 82/100.** Text, image and video input (some trackers add audio) with verified basic image recognition (8/8 color probes); text-only output — the +video-in band is 75–90.
- **Coding: 55/100.** Zero verified public coding benchmarks — only community anecdotes and the BENCHY composite; score rests on thin evidence, conservative.
- **Cost efficiency: 100/100.** $0/$0 free preview ($0 = 100 per methodology); flagged as a time-limited anonymous preview — permanent pricing is not guaranteed.
- **Overall Score: 67/100.** Mean of the five quality dims (55 + 55 + 90 + 82 + 55) / 5 = 67.4 → 67. Best-fit: a free experimental endpoint for coding agents, large-context research and multimodal tests — not a blind production dependency given the anonymous provenance and unclear long-term terms.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (OpenRouter listing, spacebunnyalpha.com independent field guide, buildfastwithai review, aibenchy.com, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Space_Bunny.md`, using the same headings.
