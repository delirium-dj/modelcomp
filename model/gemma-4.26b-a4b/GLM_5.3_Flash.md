# Gemma 4 26B A4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemma-4.26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE)
- **Short description:** Google DeepMind's open-weights Gemma 4 MoE variant — 26B total parameters with ~4B active, trading a small compute footprint for near-31B reasoning in class comparisons. Top use cases: cheap hosted inference, math/competitive-programming strength on a budget, and self-hosting.
- **Provider / access:** Hugging Face (google/ Gemma 4 collection, Apache 2.0); hosted on OpenRouter (free tier available) and third-party hosts (Inworld, anotherwrapper comparisons); indexed by Artificial Analysis via OpenRouter. Chat Completions-style API on aggregators.
- **Release / knowledge:** Gemma 4 family, first half of 2026 (26B A4B reviewed in comparisons from May–Aug 2026); knowledge cutoff not published.
- **IDs:** Artificial Analysis/OpenRouter `gemma-4-26b-a4b`-class listing; HF Gemma 4 collection. No dedicated OpenCode Zen Free ID verified (OpenRouter free tier exists).
- **Context window:** 256K tokens per family documentation (Gemma 4 model cards); one practical guide (MindStudio) cites 128K "in practice" for the 12B and 26B variants. Verified how: family-level vendor docs vs third-party guide; not individually confirmed for this variant.
- **Modalities:** text + image input per Gemma 4 family multimodal positioning (12B sibling confirmed encoder-free unified; this variant's vision specifics not independently documented), text output. Tool calls: exercised via agentic SWE-bench harnesses; JSON mode not documented.
- **Pricing (as of 2026-10-05):** $0.07 / $0.34 per 1M in/out (Inworld listing); $0.13/1M input in anotherwrapper's Seed 2.1 Turbo comparison (82% cheaper); free tier on OpenRouter (typical free-tier data-usage caveats). Apache 2.0 weights = free self-hosting.
- **Architecture:** 26B total parameters, ~4B active (Mixture-of-Experts); Apache 2.0; member of the 2.3B–31B Gemma 4 family (dense E2B/E4B/12B/31B + this MoE); also cited as an architecture base in a DiffusionGemma arXiv paper.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Lite (agentic, local FP8 + Moatless Tools scaffold): **38.67%** (116/300), ranked #16 globally at the time, within 0.33% of Moatless Tools + Claude 3.5 Sonnet (ai-muninn.com, Apr 2026)
- SWE-bench Verified (grigio.org head-to-head harness): **17.4%** (vs Qwen3.6-35B-A3B's 73.4% in the same setup) — results vary drastically by agentic scaffold
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **71.4%** (Artificial Analysis via OpenRouter)
- Math / competitive programming: class-leading among small open models per dev.to comparison (exact AIME value not published for this variant; family 31B cites 89.2% AIME 2026)
- LLM Stats composite: rank #135 (composite value not stated)
- HLE / LCR / MLCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **17.4%** in one independent harness (grigio.org); the dev.to guide instead reports Gemma 4 26B A4B winning SWE-bench Verified among small open models — harness-dependent spread of roughly 17–39% across scaffolds
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported for this variant

### Normalized scores (1–100)

- **Tool use: 52/100.** The only agentic evidence is SWE-bench in two scaffolds — a strong #16-global Lite run (38.67% with Moatless Tools) against a weak 17.4% Verified run — so tool competence is real but fragile and scaffold-dependent; no Terminal-Bench/Tau2 data at all.
- **Reasoning: 65/100.** GPQA Diamond 71.4% plus claimed math/competitive-programming wins among small open models; capped by missing HLE/AIME numbers for this variant and first-party-heavy sourcing.
- **Context window: 68/100.** 256K family window (128K practical per one guide) is a mid-tier spec with zero retrieval verification for this variant.
- **Multimodal: 55/100.** Family multimodal positioning implies image input, but no vision benchmark was published for this variant specifically — capability credited, unmeasured.
- **Coding: 58/100.** SWE-bench evidence spans 17.4%–38.67% depending on scaffold; competitive-programming strength is claimed but no LiveCodeBench number exists to confirm.
- **Cost efficiency: 94/100.** $0.07–$0.13 per 1M input, a free OpenRouter tier, and Apache 2.0 weights make it among the most cost-efficient in class; short of 100 only because output-token pricing varies by host.
- **Overall Score: 59.6/100.** Mean of the five quality dims (52 + 65 + 68 + 55 + 58) / 5. Best fit: ultra-cheap hosted or self-hosted general reasoning; agentic coding only with a well-tuned scaffold.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Artificial Analysis via OpenRouter, ai-muninn.com, grigio.org, dev.to, Inworld/anotherwrapper pricing comparisons, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
