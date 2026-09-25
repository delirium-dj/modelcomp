# GPT-OSS-120B — findings by DeepSeek 4.1 Flash

- Source: OpenAI / gpt-oss-120b (`openai/gpt-oss-120b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B (`gpt-oss-120b`). No "Free" wording — open weights, no Zen Free ID.
- **Short description:** OpenAI's open-weights flagship of the GPT-OSS family: a 117B-total / 5.1B-active MoE reasoning model with Harmony-format reasoning effort control, released for self-hosting and cheap third-party serving rather than as a hosted flagship.
- **Provider / access:** open weights (Apache-2.0) on Hugging Face, runnable via vLLM/llama.cpp/Ollama; widely served by third-party hosts. OpenAI-compatible Chat Completions with the Harmony response format.
- **Release / knowledge:** released 2025-08-05 (OpenAI / evals.report). Knowledge cutoff not disclosed; the model predates every 2026 frontier entry in this comparison.
- **IDs:** `openai/gpt-oss-120b` / HF `openai/gpt-oss-120b`. No Zen Free ID (this folder's `meta.json` keeps a 128K placeholder row).
- **Context window:** 128K tokens (vendor model card). No long-context retrieval measurement published.
- **Modalities:** text in, text out; reasoning yes with selectable effort (low / medium / high); tool calls and structured output via the Harmony format. No image, audio or video input.
- **Pricing (as of 2026-09-25):** open weights — self-hosting is free at the margin; hosted per-token rates differ by provider and no single verified list price was captured in this pass (this folder's `meta.json` says only "Standard pricing").
- **Architecture:** sparse MoE, ~117B total / ~5.1B active parameters, 36 layers, MXFP4 quantization, Apache-2.0 (vendor card).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Telecom): **65.8%** pass^1 (evals.report, official)
- GDPval-AA: **947 Elo** (evals.report, official)
- MCP-Universe: **25.54%** overall success rate (evals.report, verified)
- Terminal-Bench 2.1 / Tau3-Banking / OSWorld / Claw-Eval: no verified public score found
- Toolathon: **MCP-Universe 25.54%** is the closest available proxy; Toolathon itself not found

Reasoning / knowledge:

- GPQA Diamond: **75.8%** accuracy (evals.report, official)
- AIME (OTIS Mock): **88.9%** accuracy (official) — math, no-tool
- MMLU-Pro: **80.8%** (verified); Global-MMLU: **82.8%**; MultiNRC: **15.17%**
- HLE / CritPt / LCR: no verified public score found
- Artificial Analysis Intelligence Index: **33.3** (evals.report, unverified); Epoch Capabilities Index: **140.8** (official)
- IFBench: **69.0%**; MultiChallenge: **45.34%**; SimpleQA Verified: **13.9%**
- AA-Omniscience: **-49** index (official); Vectara Hallucination Leaderboard: **14.2%** hallucination rate (official)
- MASK honesty score: **92.00** (verified)

Coding:

- SWE-bench Pro: **16.20%** resolved (evals.report, official); SWE-bench Verified: no verified public score captured in the sources reviewed
- LiveCodeBench: **87.8%** Pass@1 (evals.report, unverified); LiveCodeBench Pro: **1299** Codeforces Elo (official)
- Aider Polyglot: **41.8%** correct (official); SciCode: **38.9%** (unverified); WeirdML: **48.2%** (official)
- Coding Index: no verified published index found

Long context:

- No MRCR / RULER / GraphWalks result for the 128K window was found.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench Telecom 65.8% and GDPval-AA 947 Elo are mid-band results (Tau3 10–25% / GDPval 900–1200 = 50–70), while MCP-Universe 25.54% shows weak multi-tool reliability; no Terminal-Bench or OSWorld number exists.
- **Reasoning: 62/100.** GPQA Diamond 75.8% sits inside the 60–80% mid band with AIME 88.9% and MMLU-Pro 80.8% in support, but the 33.3-index, HLE unpublished and AA-Omniscience -49 (14.2% hallucination rate) mark a real reliability ceiling.
- **Context window: 57/100.** 128K maps to the middle of the 100K–200K tier (50–64), with no retrieval measurement to justify more.
- **Multimodal: 15/100.** Text-only in and out (Harmony text format) — the 10–20 band.
- **Coding: 65/100.** Contest-style coding is strong (LiveCodeBench 87.8% Pass@1, LiveCodeBench Pro 1299 Elo) but repository-scale agentic coding is weak (SWE-bench Pro 16.20%, SciCode 38.9%, Aider Polyglot 41.8%) — a mid-band split verdict.
- **Cost efficiency: 96/100.** Apache-2.0 weights self-host free and third-party serving is among the cheapest on the market, but no verified published rate exists for this report, so it stops short of the $0 = 100 / 97–99 anchors.
- **Overall Score: 51/100.** (55 + 62 + 57 + 15 + 65) / 5 = 50.8 → 51. Best fit: cheap self-hosted text reasoning and single-tool automation — good reasoning/math per dollar, poor long-horizon coding, no multimodality, 128K window.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (evals.report benchmark ledger, OpenAI GPT-OSS model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
