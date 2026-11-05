# Kimi K3 — findings by Mistral Large 4

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight flagship MoE model — 2.8T total / 104B active params (LatentMoE), 1M context, built for agentic coding and long-horizon knowledge work; replaced by Kimi K3.1 Pro on 2026-10-23.
- **Provider / access:** Moonshot AI API / Kimi platform, OpenRouter (`moonshotai/kimi-k3`); open weights on Hugging Face (`moonshotai/Kimi-K3`) and GitHub (`MoonshotAI/Kimi-K3`).
- **Release / knowledge:** Released 2026-07-16 (llm-stats/OpenRouter); official blog kimi.com/en/blog/kimi-k3. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `moonshotai/kimi-k3` (HF/OpenRouter); API model `kimi-k3`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text in / text out (no verified image/audio/video input evidence found for K3); tool calls, agentic harnesses; reasoning.
- **Pricing (as of 2026-11-05):** API $3 / $15 per 1M in/out (codersera); open weights allow self-hosting (hardware-intensive at 2.8T). No free tier verified.
- **Architecture:** Open weights (modified MIT-style license per BenchLM/HF), 2.8T-param MoE with 104B active (LatentMoE framework), 1M context.

### Raw benchmarks found

Official blog/HF/GitHub cross-checked against morphllm, codersera, emergent.sh, BenchLM, AA, orcarouter; conflicts/gaps noted:

Agent / tool use:

- Agentic coding focus at launch; GDPval-AA: **1548 Elo** — behind only Fable 5 (emergent.sh)
- Artificial Analysis Intelligence Index: **~60 at max** (theregister Sept-2026 ranking lists GLM-5.3 max 60 and Kimi K3 in the top cluster); AA v4.3.2 comparisons place it near GLM-5.3 (orcarouter: "one index point, 3.4x the price" vs GLM-5.3)
- Claw-Eval / OSWorld / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- AA Index ~60 at max (top open-weight band); CritPt covered in GitHub eval harness; no verified GPQA/HLE numbers captured

Coding:

- Terminal-Bench: **88.3%** (emergent.sh)
- DeepSWE v1.1: **67.5%** (morphllm; HF cites 67.3 — minor conflict, both cited)
- FrontierSWE: **81.2%** (morphllm)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic-coding positioning and top-cluster AA Index, but few per-benchmark tool rows published for this ID.
- **Reasoning: 88/100.** AA Index ~60 at max is the top open-weight band; no GPQA/HLE captured.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 15/100.** Text-only per methodology (no verified non-text input evidence found for K3).
- **Coding: 92/100.** TB 88.3%, FrontierSWE 81.2%, DeepSWE 67.5–67.5% — frontier open-weight band.
- **Cost efficiency: 60/100.** $3/$15 per 1M API sits at the ~$3/$15 ≈ 60 band; open weights allow cheaper self-hosting at scale but 2.8T is hardware-intensive; no free tier.
- **Overall Score: 76/100.** Half-up mean of (88 + 88 + 96 + 15 + 92) / 5 = 75.8 → 76. Best fit: top open-weight coding/agent model for self-hosting or API; text-only and $3/$15 keep it below the proprietary frontier; successor K3.1 Pro (2026-10-23) already replaces it.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official Kimi blog fetched, 2026-11-05 UTC); official Moonshot blog/HF/GitHub prioritized, cross-checked against morphllm, codersera, emergent.sh, BenchLM, AA, orcarouter, kie.ai; conflicting figures (DeepSWE 67.5 vs 67.3; AA index cluster readings) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3 Tech Blog — Moonshot AI (official)](https://www.kimi.com/en/blog/kimi-k3)
  - [moonshotai/Kimi-K3 — Hugging Face (open weights, eval list)](https://huggingface.co/moonshotai/Kimi-K3)
  - [GitHub — MoonshotAI/Kimi-K3](https://github.com/MoonshotAI/Kimi-K3)
  - [morphllm — Kimi K3 (2.8T/104B, 1M ctx, DeepSWE 67.5, FrontierSWE 81.2)](https://www.morphllm.com/kimi-k3)
  - [codersera — Kimi K3 guide ($3/$15 API, benchmarks vs Opus 5)](https://codersera.com/blog/kimi-k3-complete-guide-2026/)
  - [emergent.sh — Kimi K3 benchmarks (TB 88.3%, GDPval 1548)](https://emergent.sh/learn/kimi-k3-benchmark)
  - [BenchLM — kimi-k3 (open-weight, license; K3.1 Pro replaced it 2026-10-23)](https://benchlm.ai/models/kimi-k3)
  - [orcarouter — Kimi K3 vs GLM-5.3 (one index point, 3.4x price)](https://www.orcarouter.ai/blog/kimi-k3-vs-glm-5-3)
  - [OpenRouter — moonshotai/kimi-k3 (released 2026-07-16)](https://openrouter.ai/moonshotai/kimi-k3)
  - [llm-stats — kimi-k3 (released 2026-07-16)](https://llm-stats.com/models/kimi-k3)
  - [The Register — Sept 2026 rankings (GLM-5.3/Kimi K3 top open-weight cluster ~60)](https://www.theregister.com/ai-and-ml/2026/09/02/with-gemini-38-flash-google-reminds-everyone-its-still-in-the-race/5294049)
