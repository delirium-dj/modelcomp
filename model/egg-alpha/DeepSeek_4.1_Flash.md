# Egg Alpha — findings by DeepSeek 4.1 Flash

- Source: TokenRhythm (基元律动) / Egg Alpha (anonymous stealth drop)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** Anonymous stealth chat model that appeared on the TokenRhythm (基元律动) platform around 2026-11-03 — 1M-token context, 128K max output, text/image/video input, optional reasoning, tool calling, OpenAI + Anthropic protocols plus a Responses API, free while it lasted. Withdrawn ~2026-11-05 as "temporarily resting" (platform announcement); identity never disclosed. One of the recurring anonymous "stealth" drops of late 2026.
- **Provider / access:** TokenRhythm platform (tokenrhythm.studio / tokenrhythm.ai), model picker entry `egg-alpha` (now absent — the public model list no longer returns it and ID lookups 404). No OpenCode Zen route for this specific drop.
- **Release / knowledge:** appeared ~2026-11-03; withdrawn ~2026-11-05; knowledge cutoff not published.
- **IDs:** `egg-alpha` (TokenRhythm; retired).
- **Context window:** 1,000,000 total; 128,000 max output (platform listing).
- **Modalities:** text, image, video in; text out; reasoning (optional, on by default); tool calling; streaming; cache reads; no embeddings, image editing or audio.
- **Pricing (as of the window):** free input/output during the limited testing window; no list price was ever published.
- **Architecture:** undisclosed; anonymous. Community speculation links these short-lived alpha drops to the platform's in-house model testing ahead of named releases (e.g. NeoHorse-1.5-Flash Preview) — unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld: no verified public score found
- Toolathon / MCP-Atlas / Claw-Eval: no verified public score found
- Qualitative: browser-based OS interface and 3D racing game demos; tool calling and Responses API listed (techgogogo hands-on)

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found
- ModelDial "knowledge reasoning" axis: **90/100** (third-party coding-eval axis; non-standard scale)
- Qualitative: outperformed Pulse Alpha on strict-constraint sentence generation (techgogogo)

Coding:

- ModelDial coding evaluation (default tier, published 2026-11-02): **composite 76.4 — rank #20 of 52 models** on their coding leaderboard
  - Backend engineering **65** (service contract & boundaries 10/20; retry/exception 14/20; CI & audit 15/20; transaction state 17/20; cache strategy & regression 9/20)
  - Frontend interaction **78**; knowledge reasoning **90**; run time 32m52s
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: no verified public score found
- Qualitative: high-quality SVG generation (pelican-on-bicycle with Saturn ring)

Long context:

- 1M-token window and 128K output listed, but no long-context retrieval measurement published

### Normalized scores (1–100)

- **Tool use: 56/100.** Tool calling, streaming and a Responses API were listed and small app demos worked, but there is no agentic benchmark of any kind and the model is already withdrawn.
- **Reasoning: 62/100.** ModelDial's knowledge-reasoning axis scored 90/100 on its own scale and constraint-following looked strong, but no GPQA/HLE-style evidence exists; conservative mid-band.
- **Context window: 94/100.** 1M-token tier with 128K max output on the listing; short-lived and untested at depth, so just under the 95+ band.
- **Multimodal: 78/100.** Text, image and video input with text out; no audio or image editing, and the modality claims were never independently verified.
- **Coding: 66/100.** ModelDial's measured composite (76.4, #20/52) with a 78 frontend axis is solid, but backend consistency (65, cache/regression 9/20) and the absence of SWE-style benchmarks cap it.
- **Cost efficiency: 100/100.** Free input and output for the duration (time-limited stealth window; the model is no longer served).
- **Overall Score: 71/100.** (56 + 62 + 94 + 78 + 66) / 5 = 71.2 — a capable, free, long-context omni-input stealth drop whose evidence base is one third-party coding eval and a few demos; identity and part of its capability profile remain unverified.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-13
- Method: public internet research (ModelDial measured coding evaluation, techgogogo Egg Alpha profile, mozhenzhen community availability audit). The websearch tool was unavailable (HTTP 402) this run; research used direct page fetches only — every cited URL was actually fetched.
- Reference URLs:
  - [ModelDial — Egg Alpha measured coding evaluation (composite 76.4)](https://modeldial.com/models/egg-alpha)
  - [AI产品狙击手 (techgogogo) — Egg Alpha profile and hands-on notes](https://www.techgogogo.com/ai-tools/egg-alpha/)
  - [模真真 (mozhenzhen) — Egg Alpha availability audit and withdrawal notes](https://mozhenzhen.com/circle/116)
  - [AI技能智慧站 — egg-alpha first-look analysis](https://aishare.jizhiku.net/archives/69633)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
