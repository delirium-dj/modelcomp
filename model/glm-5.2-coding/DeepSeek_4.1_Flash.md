# GLM-5.2 Coding — findings by DeepSeek 4.1 Flash

- Source: Z.ai / Zhipu AI (`glm-5.2` delivered through the GLM Coding Plan — catalogued in coding agents as "Z.ai: GLM 5.2 Coding"; no Free ID)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding (Z.ai). Coding-agent SKU/route of GLM-5.2 — same weights and model ID as `model/glm-5-2/`, mirroring `glm-5-1-coding` → "GLM 5.1 Coding". Z.ai publishes no separate "GLM-5.2-Coding" scorecard, so the scores below describe GLM-5.2 as it is served to coding agents, not a distinct checkpoint.
- **Short description:** Z.ai's flagship open-weight 753B-parameter MoE built for long-horizon coding and agentic work, launched first through the GLM Coding Plan with a 1M-token context; the strongest open-weight coding model of its release window and the closest open challenger to Claude Opus 4.8 on coding. Superseded inside the Coding Plan by GLM-5.3 (2026-08-14), which Z.ai reports as +50% on its in-house Code Bench over GLM-5.2 from post-training alone on the same base.
- **Provider / access:** Z.ai OpenAI-compatible API `https://api.z.ai/api/paas/v4/chat/completions` (verified 2026-08-30, Apidog) — Chat Completions API; the GLM Coding Plan subscription is the route for interactive coding clients (Claude Code, Cline, Cursor, OpenCode). Also hosted via OpenRouter (`z-ai/glm-5.2`) and 12+ providers (GetDeploying, updated 2026-09-15).
- **Release / knowledge:** Coding-Plan release 2026-06-13; open weights 2026-06-16 (Hugging Face, `zai-org/GLM-5.2`, MIT); knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.2` (OpenRouter), `glm-5.2` (aggregator catalogues, paid). **No Free ID exists** for this model on the free tier this repo tracks — scored on paid pricing, the same convention as `glm-5-1-coding`; Apidog also states there is no free OpenRouter lane for `glm-5.2`.
- **Context window:** 1,048,576 tokens total (5× GLM-5.1's 200K); max output 131,072 tokens (128K) per response — verified on the Hugging Face model card for `zai-org/GLM-5.2` and corroborated by OpenRouter/Kilo (`1,048,576` / `131,072`) and GetDeploying.
- **Modalities:** text in, text out only. Reasoning yes, with High/Max thinking-effort levels (effort is also a documented cost lever). Tool calls + `tool_choice` (parallel calls), structured output / JSON schema, MCP, streaming, prompt caching. No image/audio/video/PDF input — Kilo lists input modality "Text", GetDeploying says "Text only", and the Hugging Face chat template answers media parts with "you don't have multi-modal input ability".
- **Pricing (as of 2026-09-21):** Paid. API $1.40 in / $4.40 out per 1M; cached input ~$0.26 (attribute that figure to secondary reporting, not a first-party rate card); cheapest host route $0.70/$2.20 (DigitalOcean). GLM Coding Plan (checked 2026-08-24): Lite $18, Pro $80, Max $168 per month (promo $12.60 / $56 / $117.60), off-peak credits at roughly half rate; some third-party trackers still list Pro at $72.
- **Architecture:** ~753B total parameters, MoE, ~40B active (some sources report 744B); MIT-licensed weights; IndexShare sparse-attention index reuse (−2.9× per-token FLOPs at 1M context), improved MTP/speculative decoding (+20% acceptance length), agentic RL trained with `slime`.

### Raw benchmarks found

> Every number carries its source; rows with no verified public value read
> `no verified public score found`. This report has measured numbers
> (SWE-bench Pro 62.1, Terminal-Bench 2.1 81.0, GPQA-D 91.2, AIME 2026 99.2,
> MCP-Atlas ~77, PinchBench 87.0%, AST retrieval 83.3–84.5%), so it is a
> scored report — no `.excluded` twin was written.

Agent / tool use:

- Terminal-Bench 2.1 (**Terminus-2 harness**): **81.0%** (Z.ai official; GLM-5.1 63.5, Claude Opus 4.8 85.0 — within ~4 points of the closed frontier)
- Terminal-Bench 2.0: **53.0%** completion at **$26.21** average cost per attempt (Kilo Code official eval — older-generation harness, so not comparable to the 2.1 number)
- MCP-Atlas: **77.0** (Z.ai-reported) / **76.8** on the public set (via Verdent) — a three-way tie at the top with Opus 4.8 (77.8) and GPT-5.5 (75.3)
- PinchBench (OpenClaw multi-step agent tasks): **87.0%** average, **#11 of 50** official models, 263m per task, $19.21 per benchmark run (Kilo / OpenClaw leaderboard)
- HLE with tools: **54.7%** (Z.ai)
- FrontierSWE (hours-to-tens-of-hours technical projects): **74.4** — 1% behind Opus 4.8, ~1% ahead of GPT-5.5, 11% ahead of Opus 4.7; highest-ranked open-source entry
- NL2Repo: **48.9** (vendor-reported, via Verdent)
- PostTrainBench: **2nd overall**, behind Opus 4.8 and ahead of Opus 4.7 and GPT-5.5 (published as a rank, not a number)
- Tool-Decathlon: run but the value is not public — secondary write-ups place GLM-5.2 "well behind" Opus 4.8 and GPT-5.5; no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai)
- HLE: **54.7%** with tools (Z.ai) — no no-tools HLE published for this checkpoint
- AIME 2026: **99.2%** (Z.ai)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no first-party AA figure found; TheVibeFather's sourced composite reports Intelligence **33.7 (#27/91)**, Coding **68.8 (#30/149)**, Agentic **38.4 (#25/101)**, Vibe Coding Index **51.1 (#26/91)** — a different scale, quoted with care
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Arena Code WebDev (human preference): **ELO 1,592 ±7, #9 of 60** from 10,516 votes (TheVibeFather, measured 2026-09-20)

Coding:

- SWE-bench Pro: **62.1%** (Z.ai — beats GPT-5.5 58.6, trails Claude Opus 4.8 69.2, and is +3.7 over GLM-5.1's 58.4)
- SWE-Marathon (ultra-long-horizon: compilers, kernels, production services): **runner-up to Opus 4.8, trailing by 13%**; highest-ranked open-source entry (Z.ai / Hugging Face blog)
- SWE-bench Verified: no verified public score found (Z.ai publishes Pro for this checkpoint)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Z.ai Code Bench: no GLM-5.2 baseline published; GLM-5.3 is reported **+50%** over GLM-5.2 on it (indirect, Z.ai docs)
- Design / human-preference claim: vendor-adjacent write-ups state GLM-5.2 ranks **#1** on Design Arena's human-preference coding board (Emergent) — cross-check against the #9/60 WebDev ELO above

Long context:

- Braintrust × Baseten AST-derived retrieval over the CPython standard library: **83.3%** at ~25K and **84.5%** at ~50K (Opus 4.8: 87.0% / 87.9%) — effectively flat across the two tiers, 4.1–4.5× cheaper per trace and ~86% cheaper per correct answer on the perturbation slice; ahead of Opus 4.6 and Sonnet 4.6 at both tiers
- MRCR / RULER / GraphWalks / needle tests beyond 50K: no verified public score found (Z.ai claims a "solid" 1M window and 1M-context coding-agent training, but publishes no retrieval curve)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality dimensions
> (Tool, Reasoning, Context, Multimodal, Coding); Cost efficiency is scored
> independently and excluded from Overall.

- **Tool use: 86/100.** Terminal-Bench 2.1 81.0% lands within ~4 points of Claude Opus 4.8, MCP-Atlas ~76.8–77.0 is a top-three tie, PinchBench 87.0% (#11/50) is real OpenClaw multi-step work and FrontierSWE 74.4 sits 1% off Opus 4.8 — frontier-adjacent agentic evidence. Capped by the Tool-Decathlon deficit, a 53.0% run on the older Kilo TB2.0 harness, and missing Tau3-Banking/GDPval-AA/Claw-Eval/SWE-Atlas disclosures.
- **Reasoning: 90/100.** GPQA Diamond 91.2% and AIME 2026 99.2% clear the frontier GPQA 90%+ / contest-math bar, with HLE-with-tools 54.7% in the frontier band. Capped by the absent no-tools HLE, no LCR/MLCR/CritPt, no first-party Artificial Analysis index, and the fact that nearly all reasoning numbers are vendor-run.
- **Context window: 93/100.** A full 1,048,576-token input window maps to the ≥1M tier, and the 131,072-token output ceiling is generous for agent loops; independent AST retrieval is high and flat (83.3% → 84.5% from 25K to 50K). It stops short of 95+ because no recall curve is published deep into the window, where ~98% would be required.
- **Multimodal: 15/100.** Text in, text out only — no image, audio, video or PDF input on this ID (Kilo lists input modality "Text"; the Hugging Face chat template explicitly rejects media parts). Text-only floor; tool-call output earns no multimodal credit.
- **Coding: 88/100.** SWE-bench Pro 62.1% clears GPT-5.5 (58.6%) and is the best open-weight result of its window, supported by Terminal-Bench 2.1 81.0%, FrontierSWE 74.4 and a strong human-preference signal (Arena Code WebDev ELO 1,592, #9/60). Capped below the Opus-tier 90s by un-disclosed SWE-bench Verified / LiveCodeBench / SciCode numbers and the 13% SWE-Marathon gap to Opus 4.8.
- **Cost efficiency: 78/100.** Not free anywhere: $1.40/$4.40 per 1M with a $0.26 cache read and no free OpenRouter lane. What holds it this high is value rather than price — the cheapest hosted route is $0.70/$2.20, prompt caching cuts the stable coding-agent prefix by ~81%, the Coding Plan starts at $18/mo with off-peak half-rate credits, and Braintrust measured 4.1–4.5× lower cost per trace than Opus 4.8 at equal retrieval tiers. A paid-value score, not a $0 score.
- **Overall Score: 74.4/100.** (86 + 90 + 93 + 15 + 88) / 5 = 74.4. Best fit: cost-sensitive, text-only long-horizon coding agents (Claude Code, Cline, OpenCode) that need a 1M window plus open weights; skip it for screenshot/UI-vision work or when Tau3/GDPval-style tool benchmarks are the gate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-21
- Method: public internet research — Z.ai's GLM-5.2 launch blog and the `zai-org/GLM-5.2` Hugging Face card/model card, vendor benchmark tables as re-reported by Apidog, Emergent and Verdent, OpenRouter/GetDeploying/Kilo spec and pricing listings, the Braintrust × Baseten long-context retrieval eval, TheVibeFather sourced composites, and GLM Coding Plan coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Idempotency: created only because this folder had no `DeepSeek_4.1_Flash.md`; no existing file was read, overwritten, or deleted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
