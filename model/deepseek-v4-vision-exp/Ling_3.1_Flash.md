# DeepSeek V4 Flash Vision Exp — findings by Ling 3.1 Flash

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`; API `deepseek-v4-flash-vision-exp` serving `DeepSeek-V4-Flash-Vision-Exp`; api.deepseek.com, Chat Completions/Messages/Responses; open weights `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's first experimental multimodal V4 model (2026-08-21) — the V4-Flash MoE backbone (284B total / 13B active) plus a 32-layer ViT (~0.5B) — holding text-agent parity with V4-Flash (Terminal-Bench 2.1 83.9%, Toolathlon 75.9%, DeepSWE 59.3% above Opus 4.8's 58.0%) while jumping on multimodal agents (ApexBench 36.5, Agents' Last Exam 27.3 above Opus 4.8's 25.7, ZeroBench 35.0 above Opus 4.8's 34.0); 1M context, ~168GB FP4+FP8 checkpoint, free OpenCode Zen tier access.
- **Provider / access:** DeepSeek API (mixed text+image input via base64, external URLs or the Files API; Chat Completions, Messages and Responses formats), chat.deepseek.com; open weights (48 shards, ~168GB, FP4+FP8 mixed: MoE experts FP4, attention/norm/router FP8, vision tower BF16) with a fused DSpark speculative-decoding draft module. Free tier: yes (repo meta.json documents Free OpenCode Zen tier access).
- **Release / knowledge:** 2026-08-21 (API release), HF 2026-09-10; knowledge cutoff not captured.
- **IDs:** `opencode/deepseek-v4-vision-exp` / `deepseek-v4-flash-vision-exp`. NOTE: the repo `meta.json` is stale on context ("200K"); the model has a 1,048,576-token window. Its "Text, image, PDF in" note: text+image is confirmed by DeepSeek; PDF input is not confirmed in DeepSeek's materials.
- **Context window:** 1,048,576 tokens.
- **Modalities:** text, image in; text out (PDF input claimed by the repo meta.json, unconfirmed by DeepSeek).
- **Pricing (as of 2026-10-02):** the Vision-Exp-specific API rate was not captured; the DeepSeek V4 Flash family lists $0.15–0.30 cache-miss input / $0.60–1.20 output per 1M (off-peak/peak) as the reference point, with cache hits at $0.003–0.006; free OpenCode Zen tier access.
- **Architecture:** V4-Flash MoE backbone (43 layers, 256 routed experts with 6 active per token, Compressed Sparse Attention, manifold-constrained hyper-connections) + 32-layer/1024-dim ViT with a two-layer aligner (~0.5B on top of the 284B backbone); fused DSpark draft module (2.99 tokens/forward mean acceptance, 66.3% overall acceptance; image tokens do not degrade acceptance).

### Raw benchmarks found

Vendor (DeepSeek model card, 2026-08; DeepSeek models evaluated with the minimal mode of DeepSeek Harness, `max` reasoning effort, temperature 1.0, top_p 0.95):

Text agent capabilities:

- Terminal-Bench 2.1: **83.9%** (vs V4-Flash-0731 82.7%, Opus 4.8 85.0%)
- Toolathlon-Verified: **75.9%** (vs 70.3%, Opus 4.8 76.2%)
- CyberGym: **75.3%** (vs 76.7%, Opus 4.8 78.3%)
- DeepSWE: **59.3%** (vs 54.4%, Opus 4.8 58.0%) — above Opus 4.8
- NL2Repo: **57.7%** (vs 54.2%, Opus 4.8 69.7%)
- DSBench-Hard: **63.6%** (vs 59.6%, Opus 4.8 71.7%)
- AutomationBench (Public): **25.7%** (vs 25.1%, Opus 4.8 27.2%)

Multimodal agent capabilities:

- ApexBench (pass@1): **36.5%** (vs 26.2%†, Opus 4.8 39.4%)
- Agents' Last Exam: **27.3%** (vs 25.2%†, Opus 4.8 25.7%) — above Opus 4.8
- Chartography: **64.3%** (vs —, Opus 4.8 65.0%)
- ZeroBench (pass@5): **35.0%** (vs —, Opus 4.8 34.0%) — above Opus 4.8
- † The V4-Flash-0731 baseline ignored multimodal elements in the input for ApexBench and Agents' Last Exam, so those comparisons are not apples-to-apples.

Independent:

- OCRBench (full 1000 samples, GB200 NVL4, mixed text+image traffic): **83.5%** (835/1000, 0 request errors) — Key Information Extraction 92.5%, Doc-oriented VQA 90.0%, Scene Text VQA 89.5%; weakest: handwritten math 49.0%, handwriting recognition 58.0%
- GPQA Diamond, HLE, SWE-bench, LiveCodeBench, MCP Atlas, MRCR/RULER/AA-LCR, MMMU/Video-MMMU: no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 83.9% (near the 85% frontier bar), Toolathlon-Verified 75.9% and CyberGym 75.3% lead, with DeepSWE 59.3% (above Opus 4.8's 58.0%), NL2Repo 57.7% and DSBench-Hard 63.6% supporting; AutomationBench 25.7% is weak, and MCP Atlas/τ³/BrowseComp were not captured.
- **Reasoning: 68/100.** No GPQA Diamond, HLE or FrontierMath figure was captured for this checkpoint (DeepSeek states text-only reasoning matches DeepSeek-V4-Flash); multimodal reasoning signals are ZeroBench 35.0 (pass@5, above Opus 4.8's 34.0), Chartography 64.3 and OCRBench 83.5%, with Agents' Last Exam 27.3% (above Opus 4.8's 25.7%) supporting.
- **Context window: 95/100.** 1,048,576-token window; no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 72/100.** text/image in with text out — between the +image-in band (60–70) and the +video/PDF band (75–90), reflecting strong agentic vision scores (OCRBench 83.5%, Chartography 64.3, ZeroBench 35.0 pass@5 above Opus 4.8) without general MMMU/Video-MMMU evidence; PDF input is claimed by the repo meta.json but not confirmed in DeepSeek's materials.
- **Coding: 74/100.** Terminal-Bench 2.1 83.9% (near the 85% frontier bar) and DeepSWE 59.3% (above Opus 4.8's 58.0%) lead, with NL2Repo 57.7% and DSBench-Hard 63.6% supporting; SWE-bench, LiveCodeBench and the AA Coding Index were not captured.
- **Cost efficiency: 88/100.** The Vision-Exp-specific API rate was not captured; the DeepSeek V4 Flash family lists $0.15–0.30/$0.60–1.20 per 1M (off-peak/peak) as the reference point — near the ~$1.25/$4.25≈88 anchor — with free OpenCode Zen tier access (per the repo meta.json) and open weights (~168GB, FP4+FP8) to self-host.
- **Overall Score: 77/100.** (76+68+95+72+74)/5 = 77.0 — a legitimate experimental multimodal agent (TB2.1 83.9%, Toolathlon 75.9%, DeepSWE 59.3%, ZeroBench and Agents' Last Exam above Opus 4.8, OCRBench 83.5%) at 1M context with free Zen access and open weights, held back by unpublished reasoning evals and an unconfirmed PDF-input claim.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (DeepSeek HF model card + API release notes, vLLM recipes, MindStudio analysis, OCRBench run); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Flash_Vision_Exp.md`, using the same headings.
