# DeepSeek V4.1 Flash — findings by Claude Sonnet 5.5

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (paid tier; no Free-tier variant found)
- **Short description:** DeepSeek's multimodal sparse MoE model with a Causal Encoder-Decoder design, MIT-licensed open weights and a controllable reasoning effort of 1–100. It is the successor to V4 Flash 0731. DeepSeek says its API names `deepseek-v4-flash` and `deepseek-flash` now route to it, and V4-Pro requests were scheduled to move to it on 2026-09-14. Top use cases are long-context coding agents and cheap tool-using workflows.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash` via Chat Completions (`https://opencode.ai/zen/v1/chat/completions`, `@ai-sdk/openai-compatible`). The Zen docs list no Responses endpoint for this ID. Also available on the DeepSeek API, OpenRouter (`deepseek/deepseek-v4.1-flash`), LLM Gateway and Hugging Face open weights (`deepseek-ai/DeepSeek-V4.1-Flash`).
- **Release / knowledge:** 2026-09-10 release (DeepSeek changelog, OpenRouter, Artificial Analysis); knowledge cutoff not published (no verified public cutoff found)
- **IDs:** `opencode/deepseek-v4.1-flash` (paid). No Free ID exists for V4.1 Flash on Zen. `deepseek-v4-flash-free` appears in GitHub issues but is absent from the Zen docs list updated 2026-09-28 and is labelled V4 Flash, not V4.1. Also `deepseek-ai/DeepSeek-V4.1-Flash` (HF) and DeepSeek API `deepseek-flash`. The separate Zen ID `deepseek-v4-flash` is listed at $0.14/$0.28 and is not verified to be V4.1.
- **Context window:** 1,048,576 tokens total (OpenRouter; HF card and Artificial Analysis say 1M). Max completion 384,000 per OpenRouter. HF recommends `max_tokens` ≥ 256K. Verified from vendor, aggregator and Artificial Analysis specs. No independent retrieval test at full length was found.
- **Modalities:** Text + image in, text out. Reasoning yes (effort 1–100). Tool calls yes. JSON mode yes (soft JSON, no strict schema enforcement per OpenRouter/LLM Gateway). No audio, video or PDF input is documented.
- **Pricing (as of 2026-09-30):** Paid, not Free. OpenCode Zen: $0.30 in / $1.20 out / $0.006 cached read per 1M; no cached-write price. DeepSeek direct is $0.15/$0.60 off-peak and $0.30/$1.20 at peak (peak is weekdays 01:00–04:00 and 06:00–10:00 UTC). Zen states zero-retention hosting in the US with no training on data, and no free-tier privacy caveat applies to this ID.
- **Architecture:** 552B backbone parameters, MoE (384 routed + 1 shared expert, 6 routed active), 8B active at prefill and 16B at decode, 40-layer CED transformer, open weights under MIT. HF lists 763B safetensors params, which includes the 196B Engram memory.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card, Max effort, DSH Minimal harness, Pass@1; 90.3% with mini-SWE, 88.0% Claude Code, 84.1% Codex, 85.0% OpenCode, 86.1% Pi, 85.8% DSH Standard/PTC). Independent: **74.5%** (Vals AI via BenchLM). The vendor-versus-independent gap is large. Also Terminal-Bench 3.0 **30.0%** and 4.0 **31.2%** (vendor); Artificial Analysis measures TB 4.0 at **27%**.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1600 Elo** (Artificial Analysis, v2.1; shown as 55.0% on OpenRouter). AA's launch post gave 1632 on v2, up from 1468 for V4 Flash 0731.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for V4.1 Flash (Toolathlon-Verified 70.3 exists only for V4 Flash 0731). Related: AutomationBench **54.8%** (vendor, official scaffold), AutomationBench-AA **69%** (Artificial Analysis), Agent's Last Exam **31.8%** (vendor).
  Reasoning / knowledge:
- GPQA Diamond: **90.9%** (DeepSeek model card, Max effort, Pass@1)
- HLE: **36.8%** (vendor, full set; 39.1% text-only subset). Artificial Analysis: **39.2%**. HLE with tools **63.9%** (vendor).
- LCR / MLCR: **84.0%** AA-LCR (Artificial Analysis); MLCR: no verified public score found
- CritPt: **14.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **39 (39.5 on OpenRouter's mirror; 40 in AA's launch post) / #7 of 116 on the AA model page**. BenchLM overall **55.7/100 / #55 of 209** (BenchLM marks it "Estimated").
- Omniscience Accuracy / Hallucination Rate: **46.4% / ~96.5%**. The rate is derived from AA's 3.5% non-hallucination rate; AA-Omniscience Index is −5.
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **51.9%** (Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **DeepSWE v1.1 74.2** (vendor, mini-SWE harness; 72.6 with DSH Minimal). Codeforces **3471**. NL2Repo **64.0** (HF card) or **65.4** (changelog/tech report). ProgramBench **20.3**. CyberGym **88.1**. BenchLM coding (public lane) **49.5**.
  Long context:
- No MRCR / RULER / GraphWalks value found for V4.1 Flash. Only AA-LCR 84.0% and base-model LongBench-V2 45.2 (vendor).

### Normalized scores (1-100)

- **Tool use: 82/100.** Vendor Terminal-Bench 2.1 is 90.6%, which would be frontier, but the independent Vals run is 74.5%. AA's Terminal-Bench 4.0 is 27% and GDPval-AA is 1600 (frontier is ~1750+). AutomationBench-AA is 69%. Tau3-Banking has no score, and vendor numbers are not independently reproduced.
- **Reasoning: 84/100.** GPQA is 90.9%, at the frontier bar, and HLE is 36.8–39.2%, just under it. AA-LCR is 84.0%. CritPt is only 14.3% and the AA Index is 39–40, far below the frontier-60+ mark. Omniscience is weak (index −5, ~96.5% hallucination when wrong).
- **Context window: 96/100.** Tier ≥1M (1,048,576 tokens verified), so the 95–100 band. It is not 100 because no ≥98% retrieval at 512K+ (MRCR/RULER) was found.
- **Multimodal: 68/100.** Text + image in, text out. Vendor vision evidence includes DocVQA 95.6, MMMU-Pro 56.5 (base model), BabyVision 89.6 (with tools) and Chartography 78.9 (with tools). No documented video, PDF or audio input, so it stays in the image-in band.
- **Coding: 90/100.** DeepSWE 74.2 and Terminal-Bench 2.1 90.6 (both vendor) reach the frontier bar, while SciCode 51.9% is just under 55%. The independent Vals TB2.1 of 74.5% and the missing SWE-bench Verified/LiveCodeBench/Vibe Code scores keep it below 95. Independent hands-on reports of failures on simple tasks are a further caution.
- **Cost efficiency: 94/100.** OpenCode Zen tier: $0.30/$1.20 per 1M with $0.006 cached read, between the ~$0.10/$0.20 anchor (97–99) and ~$0.60/$2.20 (~92). Direct off-peak $0.15/$0.60 would score ~96. It is verbose (250M output tokens on the AA Index, $0.27 per task), which offsets some of the per-token advantage.
- **Overall Score: 84.0/100.** Mean of Tool use, Reasoning, Context, Multimodal and Coding: (82+84+96+68+90)/5 = 84.0. Best fit: cheap 1M-context coding and agent workloads with image input where per-task cost matters; verify agentic claims on your own harness and keep a stronger model for hard reasoning or knowledge-critical work.

---

## Signature

- Provided by: **Claude Sonnet 5.5 (anthropic/claude-sonnet-5-5)** — 2026-09-30
- Method: public internet research (DeepSeek HF model card and API changelog, Artificial Analysis, BenchLM, OpenRouter, LLM Gateway, OpenCode Zen docs, The Rundown, Vals AI via BenchLM); scores are normalized 1-100 interpretations, not official vendor scores. Vendor-reported figures are labelled as such and were not independently reproduced except where a third-party source is named.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
