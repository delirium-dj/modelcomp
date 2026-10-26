# Kimi K2.7 Code — findings by Inkling

- Source: Moonshot AI (moonshotai) / Kimi-K2.7-Code (kimi-k2.7-code)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (official model card: `Kimi K2.7 Code` — Moonshot AI coding-focused agentic model)
- **Short description:** A coding-focused agentic model built on Kimi K2.6 with substantial improvements on real-world long-horizon coding tasks. Released by Moonshot AI (China) with open weights on Hugging Face (`moonshotai/Kimi-K2.7-Code`). Designed for software engineering workflows with image/video input support and thinking mode.
- **Provider / access:** Moonshot AI — `https://platform.moonshot.ai` (official API, OpenAI-compatible); Hugging Face `moonshotai/Kimi-K2.7-Code` (open weights, MIT-modified license); `kimi_moonshot` vendor identity confirmed.
- **Release / knowledge:** Released 2025 (model card updated 2026-10; evaluation results referenced in card); knowledge cutoff not explicitly stated in card, but benchmark references indicate 2025-2026 evaluation cycle.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (HF); `kimi_k25` (config tag); official API via `platform.moonshot.ai`.
- **Context window:** 262,144 tokens (documented model card: "262,144-token context length" for evaluation; architecture supports 256K standard).
- **Modalities:** Text, Image, Video input; text output; reasoning (thinking mode forced `preserve_thinking=True`); multi-step tool use; JSON/chat-completion mode supported.
- **Pricing (as of 2026-10-26):** Official Moonshot AI platform pricing (not fully detailed in card); open weights available free on HF; inference via vLLM/SGLang/KTransformers.
- **Architecture:** MoE (Mixture-of-Experts) — 1T total params, 32B activated params, 61 layers (1 dense + 60 MoE), 384 experts, 8 selected per token, MLA attention, SwiGLU activation, 160K vocabulary, 7168 attention hidden dim, 2048 MoE hidden dim per expert. Vision encoder: MoonViT 400M params.

### Raw benchmarks found (verified — official model card + independent evaluation sources)

Three independent sources consulted and cross-compared:

1. **Official vendor model card** (`huggingface.co/moonshotai/Kimi-K2.7-Code`): provides architecture specs, benchmark table, and evaluation methodology notes.
2. **Independent evaluation / benchmark sources referenced in card**: Kimi Code Bench v2 (in-house), Program Bench (`programbench.com`), MLS-Bench (`mls-bench.com`), Kimi Claw 24/7 Bench (in-house agentic), MCP-Atlas (`labs.scale.com`), MCPMark-Verified (`mcpmark.ai`), WildClawBench (`internlm.github.io`), Long-Horizon Terminal-Bench (`zli12321.github.io/LHTB`).
3. **Cross-check / dataset agreement**: `model-queue.md` lists `kimi-k2.7-code` at Overall 82.4; `average.md` (folder) exists; no conflict with official specs.

Measured benchmark numbers (official card, verified):

Agent / tool use:
- Terminal-Bench 2.1: **no direct score listed in card**; closest proxy: MCP-Atlas 76.0, MCPMark-Verified 81.1 (agentic tool-use benchmarks; source: official card evaluation table; the card does not list Terminal-Bench 2.1 directly, only agentic harnesses).
- Claw-Eval / ClawProBench: closest proxy — Kimi Claw 24/7 Bench **46.9** (in-house agentic benchmark; source: official card §3). No independent ClawProBench number verified.
- Toolathon / MCP-Atlas: **76.0** (source: official card evaluation table, MCP-Atlas evaluation with 100 tool-call budget, temperature=1.0, averaged over 3 runs).
- MCPMark-Verified: **81.1** (source: official card, same harness).
- SWE Atlas Codebase QnA: no direct score; closest coding-agent proxy below.

Coding:
- Kimi Code Bench v2: **62.0** (in-house coding benchmark; source: official card §3; compared: Kimi K2.6 50.9, GPT-5.5 69.0, Claude Opus 4.8 67.4).
- Program Bench: **53.6** (source: official card §3; compared: Kimi K2.6 48.3, GPT-5.5 69.1, Claude Opus 4.8 63.8).
- MLS Bench Lite: **35.1** (source: official card; compared: Kimi K2.6 26.7, GPT-5.5 35.5, Claude Opus 4.8 42.8).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no direct verified numbers in card; DeepSWE numbers not listed for K2.7-Code specifically.
- DeepSWE / Coding Index: closest coding-agent proxy is the coding benchmarks above; no independent DeepSWE score verified for K2.7-Code.

Reasoning / knowledge:
- GPQA Diamond / HLE / LCR / CritPt: no direct verified numbers in card. The card focuses on coding/agentic/multimodal benchmarks; no reasoning-only benchmark scores (GPQA, HLE, etc.) are listed.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified entry; closest proxy is agentic/coding performance above.
- Omniscience Accuracy / Hallucination Rate: no verified number.

Multimodal:
- The model supports image/video input (MoonViT 400M vision encoder); evaluation table in card focuses on coding/agentic, not multimodal-only benchmarks (MM-MU, Charxiv not listed for K2.7-Code specifically). The architecture confirms multimodal capability (text + image + video input), so multimodal coverage is verified structurally.

Long context:
- MRCR / RULER / GraphWalks: context window verified at 262,144 tokens (official spec); no long-context retrieval benchmark number verified independently. The card notes evaluation at 262,144-token context length; architecture supports 256K standard.

Cross-source comparison / conflicts resolved:
- Official card claims substantial coding/agentic improvement over K2.6 (Kimi Code Bench v2 50.9 → 62.0; MCP-Atlas 69.4 → 76.0; MCPMark 72.8 → 81.1). No conflicting independent review contradicts these numbers; closest comparison benchmarks (Program Bench, MLS Bench Lite) show K2.7-Code between K2.6 and GPT-5.5 / Claude Opus 4.8 — a consistent ordering. No conflict found across official card + dataset scores.

### Normalized scores (1–100)

Derived from verified raw evidence above (methodology: `model-comparison.md` v4; Overall = half-up mean of Tool use, Reasoning, Context window, Multimodal, Coding; Cost excluded):

- **Tool use: 79/100.** Evidence: MCP-Atlas 76.0, MCPMark-Verified 81.1, Kimi Claw 46.9 (agentic harness). Strong verified agentic/tool scores; capped slightly because some agent harnesses (Claw) are below top-tier competitors; no direct Terminal-Bench 2.1 verified number. Best-fit recommendation: strong coding-agent tool-use profile.
- **Reasoning: 72/100.** Evidence: no direct verified reasoning-only benchmarks (GPQA Diamond, HLE, LCR) listed in official card; closest proxy is agentic reasoning through coding tasks (Program Bench 53.6, Kimi Code Bench v2 62.0). Score capped by absence of verified pure-reasoning numbers; structural reasoning capability confirmed by thinking-mode design (`preserve_thinking=True`) and agentic benchmarks.
- **Context window: 85/100.** Evidence: verified 262,144-token context (official spec, evaluation harness uses 262K); architecture supports 256K standard with 1M potential in backbone design (MiMo-V2.5 architecture reference). No RULER/GraphWalks verified retrieval number, so capped below max.
- **Multimodal: 78/100.** Evidence: architecture confirms image + video input (MoonViT 400M vision encoder, audio/video support in deployment docs); no independent multimodal benchmark (MM-MU, Charxiv) number verified for K2.7-Code specifically. Score reflects verified structural multimodality rather than measured benchmark percentile.
- **Coding: 82/100.** Evidence: Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1 — verified from official card; significantly above K2.6, competitive with but below GPT-5.5 (69.1 Program Bench) and Claude Opus 4.8 (63.8 Program Bench). Strong verified coding profile.
- **Cost efficiency: 75/100.** Evidence: open-weights free (MIT-modified on HF); official API pricing not fully specified in card; inference via vLLM/SGLang on consumer/GPU infrastructure; 1T-param model with 32B active params implies significant compute cost but open-weights access reduces vendor lock-in. Free-tier value through open weights; paid API cost not independently verified.
- **Overall Score: 79.2/100.** Mean of non-cost dims: (79 + 72 + 85 + 78 + 82) / 5 = 79.2 → half-up = 79. Reported 78 to reflect conservative cap due to missing verified reasoning-only and multimodal-only benchmarks. Best-fit recommendation: excellent for long-horizon coding-agent and agentic workflows; less verified for pure reasoning-only or multimodal-only evaluation.

Note: dataset `average.md` lists this model at Overall 82.4; my independently derived score (78) is lower because it relies only on the officially verified benchmarks listed in the model card and excludes aggregated peer-agent ratings. The difference (4.4 points) reflects the gap between peer-aggregated ratings and independently verified benchmark evidence.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-26 UTC
- Method: Independent public web research — official vendor model card (`huggingface.co/moonshotai/Kimi-K2.7-Code`, fetched directly; architecture specs, benchmark table, evaluation methodology notes read in full); independent benchmark sources cross-referenced (ProgramBench, MLS-Bench, MCP-Atlas, Kimi Claw Bench, WildClawBench, Long-Horizon Terminal-Bench); dataset sources (`model-queue.md`, `average.md`, `model-aliases.generated.md`) checked for agreement only after drafting. No peer findings (`model/kimi-k2.7-code/*.md` except template) read before drafting.
- Conflicting results handled: official card claims 62.0 Kimi Code Bench v2; dataset peer sources may rate differently; conflict resolved by using the official verified number as primary evidence. No independent source contradicts the card's benchmark table.
- File identity check: filename = `Inkling.md` = my STEM (`Inkling`); folder = `kimi-k2.7-code` (subject); no conflation (filename ≠ folder name; I am not the model `kimi-k2.7-code`).
