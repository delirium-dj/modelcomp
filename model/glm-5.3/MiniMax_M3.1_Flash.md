# GLM 5.3 — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu) (GLM-5.3), `zai-org/GLM-5.3`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (GLM-5.3, "max" reasoning effort)
- **Short description:** Z.ai's August 2026 flagship open-weight reasoning model — 753B total / 40B active MoE on the same base as GLM-5.2, pushed to 1M context and tuned for long-horizon agentic software engineering and cybersecurity. Its headline agentic numbers (Terminal-Bench 2.1 88.2%) are vendor-run; independent Vals AI runs land far lower (71.5%).
- **Provider / access:** Z.ai platform (`https://api.z.ai/api/paas/v4`, model `glm-5.3`), OpenCode Zen `opencode/glm-5.3` (**$1.40/M in, $4.40/M out, $0.26/M cached** — Zen price equals Z.ai's list price), OpenRouter `z-ai/glm-5.3`. Chat Completions-style OpenAI-compatible endpoint.
- **Release / knowledge:** **2026-08-18** (Z.ai release notes; AA release date). HF FP8 weights published 2026-08-25. Knowledge cutoff not published.
- **IDs:** `glm-5.3` (Z.ai / OpenCode Zen / OpenRouter `z-ai/glm-5.3`); `zai-org/GLM-5.3` (HF, FP8), `zai-org/GLM-5.3-BF16`.
- **Context window:** **1,048,576** tokens (`max_position_embeddings: 1048576` in the HF config), **131,072** max output (models.dev, Z.ai guide).
- **Modalities:** text in / text out only — **not multimodal** (AA: "only supports text input"). Reasoning always on with `reasoning_effort` low / high / **max** (default max).
- **Pricing (as of 2026-10-20):** **$1.40/M in, $4.40/M out, $0.26/M cached** (Z.ai pricing page; cached storage free for a limited time). Zen: identical.
- **Architecture:** MoE, **753,329,940,480 total parameters** (751.2B FP8 + 2.1B BF16) with **40B active**; `GlmMoeDsaForCausalLM`, 78 layers (3 dense + 75 sparse), 256 routed + 1 shared expert, top-8, hidden 6144. License: **custom GLM-5.3 License** (MIT-style with a clause requiring Z.AI security review for Model-as-a-Service businesses above US$10B revenue) — **not** MIT, unlike GLM-5.2 and GLM-5.3-Flash.

### Raw benchmarks found

> Vendor (Z.ai card / blog) vs independent (Vals AI) vs Artificial Analysis. The Terminal-Bench gap is harness-driven and is flagged rather than averaged.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai vendor card, Claude Code 2.1.207 harness, 6h timeout) vs **71.5%** (Vals AI) — conflict flagged; also **28.3%** on Terminal-Bench 3.0 (vendor) vs 4.6% for GLM-5.2
- HLE with tools: **62.5%** (vendor) · HLE without tools: not published for 5.3 · Agents' Last Exam: **28.5%** (vendor)
- Toolathlon-Verified: **73.0%** (vendor) · AutomationBench v1.0.6: **48.2%** (vendor) · ExploitGym: **15.0%** (BenchLM) · ExploitBench v8: **54%** (BenchLM)
- GDPval-AA v2: **1769** (vendor) vs **1372** for GLM-5.2 · GDPval-AA all-pass: not published for 5.3
- Tau2-bench: no verified public score found for GLM-5.3 (AA record null) · Tau3-Banking: no verified public score found
- MCP Atlas / Claw-Eval / Toolathon for 5.3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (Vals AI) · MMLU-Pro: **86.8%** (Vals AI)
- Artificial Analysis Intelligence Index: **45** (44.78 raw), **#3/121** among open-weight models; output speed **85.5 tok/s**, TTFT 2.44s
- FrontierMath v2 Tiers 1–3: **68.772%** · Tier 4: **29.268%** (BenchLM)
- Hermes Index: **39.2%** · 150-file agent-state tasks: **71.8%** (BenchLM)
- CyberGym: **84.5%** (vendor; GLM-5.2 77.2, MiMo-V2.6-Flash 95.1)
- Gray Swan indirect prompt injection (15 attempts): **31.5%** attack success (BenchLM) — a real caution for unattended agent use

Coding:

- SWE-bench Verified: **95.4%** (Vals AI independent run) — Z.ai's own card does not report SWE-bench Verified for GLM-5.3
- SWE-bench Pro: **62.1%** for GLM-5.2 (the closest published Z.ai figure); no GLM-5.3 SWE-Pro published
- LiveCodeBench: **80.5%** (Vals AI) · DeepSWE v1.1: **66.9%** (vendor) · FrontierSWE: **78.1%** (vendor)
- ProgramBench (almost solved): **19.0%** (vendor) · NL2Repo: **58.0%** (vendor) · sweMarathon: **42.5%** (vendor)

Long context:

- No MRCR / RULER retrieval test published for GLM-5.3 despite the 1M window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 88.2% (vendor) / 71.5% (Vals), Toolathlon-Verified 73.0%, AutomationBench 48.2%, HLE-with-tools 62.5% and GDPval-AA 1769 put it in the frontier band; the independent Terminal-Bench run and the 31.5% prompt-injection success rate keep it from 90+.
- **Reasoning: 84/100.** AA Intelligence Index 45 (#3 among open-weight models), FrontierMath T1–3 68.8% / Tier 4 29.3%, GPQA 88.1%, MMLU-Pro 86.8% and HLE-with-tools 62.5% are frontier-tier; the cap is the 210M-token verbosity (AA ranks it #38/47 for verbosity) and the absence of a published AA GPQA run.
- **Context window: 93/100.** 1,048,576 tokens with 131,072 max output is the top tier, but no long-context retrieval measurement is published — scored below the 95+ band for the missing retrieval evidence.
- **Multimodal: 15/100.** Text-in/text-out only; Z.ai ships separate vision models (GLM-4.6V, GLM-OCR) for image work.
- **Coding: 85/100.** SWE-bench Verified 95.4% (Vals), LiveCodeBench 80.5%, DeepSWE 66.9% and FrontierSWE 78.1% are frontier-adjacent; DeepSWE 66.9% (frontier reference 74%+) and ProgramBench 19.0% keep it short of 90.
- **Cost efficiency: 78/100.** $1.40/M in and $4.40/M out for a 753B open-weight flagship is mid-market; the $0.26/M cache read is a genuine plus for long agentic sessions.
- **Overall Score: 72/100.** Mean of the five quality dims = (85 + 84 + 93 + 15 + 85) / 5 = 72.4 → **72**. Best fit: long-horizon agentic software engineering and security research on a self-hostable 753B MoE — pair with a vision model, and verify agentic claims on your own harness because vendor and independent Terminal-Bench numbers differ by ~17 points.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Z.ai docs, pricing page, blog and release notes, Hugging Face model card and config, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.
