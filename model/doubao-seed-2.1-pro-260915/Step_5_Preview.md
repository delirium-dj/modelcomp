# Doubao Seed 2.1 Pro — findings by Step 5 Preview

- Source: ByteDance / ByteDance Seed (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (build `260915` = September 15, 2026)
- **Short description:** ByteDance's top Seed2.1 agent model for real-world productivity — 1M context at flat China pricing, with standout vendor-reported agent and vision numbers but weak independent factuality and puzzle-precision scores; sold only on Volcano Engine inside China.
- **Provider / access:** Volcano Engine Ark (China) only — model ID `doubao-seed-2-1-pro-260915`; not sold on BytePlus/international per the Doubao lineup guide, so no international route and no OpenCode Zen ID found in fetched sources. Served through Chat / Responses / Anthropic-style Messages APIs per the Seed lineup.
- **Release / knowledge:** Seed2.1 family announced June 23, 2026; current dated Pro build `260915` (Sept 15, 2026) carries the 1,024K window. Knowledge cutoff unknown (Epoch AI metadata).
- **IDs:** `doubao-seed-2-1-pro-260915` (Volcano Engine Ark).
- **Context window:** 1,024K (1M) tokens context; 256K max output, chain-of-thought included (Volcano Engine model list via the Doubao lineup guide).
- **Modalities:** Text, image and video in; text out. Audio input is documented for Seed 2.1 Lite (billed separately), not for Pro. Deep thinking on by default; `reasoning_effort` minimal/low/medium/high (default medium); function calling, web search and GUI/computer-use tasks per the Seed 2.1 family notes.
- **Pricing (as of 2026-11-13):** ¥6 input / ¥30 output per 1M tokens (CNY, Volcano Engine), flat across the whole 1,024K window; cached input ¥1.20 (via the Doubao lineup guide citing the Volcano Engine price list).
- **Architecture:** Closed weights (Epoch AI); parameters undisclosed.

### Raw benchmarks found

Vendor-published (ByteDance Seed official Seed2.1 evaluation table — self-reported, Pro row, comparators in the same table):

Agent / tool use:

- Agent Startup Bench (high-economic-value agent tasks): **68.8** (Claude Opus 4.7 62.3, GPT-5.5 68.1, Gemini 3.1 Pro 45.7)
- Terminal Bench 2.1 (terminal usage): **71.0** (Opus 4.7 71.7, GPT-5.5 73.8, Gemini 3.1 Pro 70.7)
- Workspace Bench (high-economic-value): **53.0** (Opus 4.7 55.1, GPT-5.5 58.7, Gemini 3.1 Pro 32.8)
- xDailyBench (white-collar office work): **61.0** (Opus 4.7 69.0, GPT-5.5 73.0, Gemini 3.1 Pro 35.2)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (the vendor's GDPval-family numbers above are its own Workspace/xDaily/Agent Startup suites, not the AA harness).

Reasoning / knowledge:

- BeyondAIME: **87.0** (Opus 4.7 79.0, GPT-5.5 91.0, Gemini 3.1 Pro 90.0)
- SuperGPQA: **70.8** (Opus 4.7 68.5, GPT-5.5 72.7, Gemini 3.1 Pro 76.6)
- KINA (knowledge): **48.3** (Opus 4.7 46.7, GPT-5.5 52.6, Gemini 3.1 Pro 53.2)
- GPQA Diamond: **89%** (Epoch AI, independent; Claude Fable 5 94%, GPT-5.5 Pro 94%, Gemini 3.1 Pro 94%)
- OTIS Mock AIME 2024-2025: **96%** (Epoch AI; all three comparators 100%/100%/96%)
- Chess Puzzles: **21%** (Epoch AI; Fable 5 47%, GPT-5.5 Pro 62%, Gemini 3.1 Pro 51%)
- SimpleQA Verified (world knowledge / factuality): **45%** (Epoch AI; Fable 5 71%, GPT-5.5 Pro n/a, Gemini 3.1 Pro 74%)
- HLE: no verified public score found.
- LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found.

Coding:

- NL2Repo-Bench (long-horizon end-to-end code): **47.0** (Opus 4.7 58.2, GPT-5.5 45.1, Gemini 3.1 Pro 33.4)
- SWE-Atlas (debugging): **35.2** (Opus 4.7 38.7, GPT-5.5 44.7, Gemini 3.1 Pro 23.6)
- ProgramBench: **50.3** (vendor's three-part figure 0/1/50.3 for Pro; Opus 4.7 0/2.5/52.1, GPT-5.5 0.5/5.5/65.9)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- 1,024K window documented; MMLongBench-128K (multimodal long-context): **78.3** (vendor; Gemini 3.1 Pro 70.7); MRCR / RULER / GraphWalks: no verified public score found.

Multimodal:

- MathVision (w. Tool): **92.6 (94.5 with tools)** (Opus 4.7 83.1, GPT-5.5 92.2, Gemini 3.1 Pro 89.2)
- MMMU-Pro (w. Tool): **81.6 (82.7)** (Opus 4.7 74.0, GPT-5.5 81.2, Gemini 3.1 Pro 80.5)
- BabyVision (perception): **73.7** (Opus 4.7 22.2, GPT-5.5 55.9, Gemini 3.1 Pro 54.4)
- CharXiv-RQ (infographics, w. Tool): **85.4 (86.4)** (Opus 4.7 82.1, GPT-5.5 83.2, Gemini 3.1 Pro 83.5)
- WorldVQA (visual knowledge): **53.0** (Opus 4.7 35.9, GPT-5.5 34.6, Gemini 3.1 Pro 44.3)
- ERQA (spatial reasoning): **72.0** (Opus 4.7 52.5, GPT-5.5 64.5, Gemini 3.1 Pro 70.8)
- ZEROBench (visual puzzle, w. Tool): **18.0 (22.0)** — weak, but the whole field is (Opus 4.7 8.0, GPT-5.5 13.0)
- Video: VideoMME **89.2**, TOMATO **79.5**, Minerva **70.7**, OVOBench **80.7**, VideoSimpleQA **76.4** (vendor table vs Gemini 3.5 Flash / 3.1 Pro)

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor-reported agentic suite leads or matches its comparator set — Agent Startup Bench 68.8 beats Opus 4.7 and GPT-5.5, Terminal Bench 2.1 71.0 is frontier-adjacent — but xDailyBench 61.0 trails Opus 4.7 (69.0) and GPT-5.5 (73.0), and every agent number here is self-reported with no independent harness confirmation; capped accordingly.
- **Reasoning: 80/100.** Strong quant/science core — BeyondAIME 87.0 (vendor), GPQA Diamond 89% and OTIS Mock AIME 96% (independent Epoch runs) — undercut by genuinely weak independent precision and factuality: Chess Puzzles 21% versus 47–62% for comparators and SimpleQA Verified 45% versus 71–74%; SuperGPQA 70.8 also trails GPT-5.5/Gemini 3.1 Pro.
- **Context window: 98/100.** 1,024K-token documented context with 256K output and flat pricing across the window, plus MMLongBench-128K 78.3 (vendor) as the only long-context evidence — top tier on spec, capped only because no model-specific MRCR/RULER/GraphWalks retrieval score is published.
- **Multimodal: 90/100.** Broad, well-measured multimodal coverage: MathVision 92.6 and MMMU-Pro 81.6 with tools, BabyVision 73.7 (Opus 4.7 scores 22.2 on the same test), WorldVQA 53.0, plus SOTA-claimed video numbers (VideoMME 89.2, OVOBench 80.7); capped by text-only output, no audio input on Pro, ZEROBench 18.0, and the figures being vendor-run.
- **Coding: 78/100.** Solid mid-frontier engineering profile — NL2Repo-Bench 47.0 and ProgramBench 50.3 beat GPT-5.5/Gemini 3.1 Pro on the vendor table — but SWE-Atlas 35.2 trails Opus 4.7 38.7 and GPT-5.5 44.7, Terminal Bench 71.0 is third in its comparator set, and no independent coding benchmark (SWE-bench Verified/LiveCodeBench) exists for this ID.
- **Cost efficiency: 80/100.** ¥6/¥30 per 1M CNY flat across the full 1M window with ¥1.20 cached input — roughly half Gemini 4 Hydrogen's $7.50 output price for comparable mid-frontier quality; capped by China-only availability (no USD card, no free tier) and vendor-run cost claims.
- **Overall Score: 84.8/100.** Mean of Tool 78 + Reasoning 80 + Context 98 + Multimodal 90 + Coding 78 = 84.8; best fit: inside China on Volcano Engine, a strong-value 1M-context multimodal agent for office, research and video-heavy workflows — weak at factual precision and puzzle-style reasoning, and its headline agent numbers still await independent replication.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-13 UTC
- Method: public internet research; web search was unavailable (HTTP 402), so per `RULES.md` § Web-research fallback I queried DuckDuckGo HTML, then fetched ByteDance Seed's official Seed2.1 page (vendor benchmark table), Epoch AI's independent model page (Chess/AIME/GPQA/SimpleQA), and the Second Talent Doubao lineup guide (Volcano Engine IDs, context and pricing) — provenance labeled per figure (vendor vs independent). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources):
  - [Seed2.1 official page with evaluation table — ByteDance Seed](https://seed.bytedance.com/en/seed2_1)
  - [Doubao Seed 2.1 Pro benchmark scorecard — Epoch AI (independent)](https://epoch.ai/models/doubao-seed-2-1-pro)
  - [Every Doubao AI model explained and compared (Nov 2026) — Second Talent, incl. Volcano Engine IDs, context and pricing](https://www.secondtalent.com/resources/every-doubao-ai-model-explained-compared/)
  - [DuckDuckGo HTML query route used for discovery](https://html.duckduckgo.com/html/?q=Doubao+Seed+Evolving+ByteDance+model+benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.