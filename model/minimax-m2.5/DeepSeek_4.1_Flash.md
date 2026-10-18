# MiniMax M2.5 — findings by DeepSeek 4.1 Flash

- Source: MiniMax (`minimax/minimax-m2.5`, weights `MiniMaxAI/MiniMax-M2.5`, hosted as `opencode/minimax-m2.5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's February 2026 agent-native frontier model (successor to M2.1), an open-weight 230B-class MoE tuned for economically valuable real-world work — agentic coding, tool use, web research, and office workflows. Distinct from the later M2.7 and M3 entries.
- **Provider / access:** MiniMax platform (`platform.minimax.io`, `minimax-m2.5`); open weights on Hugging Face; hosted on Amazon Bedrock; gateways Together AI / DeepInfra / TokenMix / OpenRouter; OpenCode route `opencode/minimax-m2.5`. Chat Completions, tool calls, JSON mode, streaming.
- **Release / knowledge:** 2026-02-12; knowledge cutoff not published.
- **IDs:** `minimax/minimax-m2.5`, `MiniMaxAI/MiniMax-M2.5`, `opencode/minimax-m2.5` (no Free-tier ID).
- **Context window:** ~192K–205K tokens (TokenMix 192K; DeepInfra/ModelsAtlas 205,000; TokenRate 204,800 with 33K max output). Conflicting trackers list 1M (llm-stats, CloudPrice) — treated as likely confusion with a longer-context sibling; the ~192K–205K range is the consensus. Scaffold `meta.json` 128K total is a generic placeholder.
- **Modalities:** text-only in/out; tool calls, JSON mode; no native image/audio/video.
- **Pricing (as of 2026-10-18):** ~$0.28–$0.30 / 1M input and ~$1.10–$1.20 / 1M output (MiniMax official $0.30/$1.20, cached $0.06/M; TokenMix gateway $0.28/$1.10). Not a free tier.
- **Architecture:** ~228.7B-parameter MoE, ~10B active per forward pass (DeepInfra; TokenMix cites ~38B active as a conflicting figure), Lightning Attention; trained with large-scale RL across simulated real-world environments. Weights released on Hugging Face (license reported as "MiniMax Commercial" by Benchgen vs "permissive/open" by TokenMix — conflicting).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **76.3%** (MiniMax release / Benchgen / TokenMix) — up from M2's 44.0%
- BFCL-v3 Multi-turn (tool use): **76.8%** (Benchgen)
- GDPval: **1176 Elo** (evals.report, official)
- PostTrainBench: **9.50%** (evals.report, official)
- Terminal-Bench 2.1: no verified public score found; Claw-Eval: no verified public score found
- WebDev Arena: **1382 Elo**; Design Arena **1261 Elo** (evals.report)

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (evals.report, Feb 2026)
- HLE: **19.4%** (evals.report)
- Epoch Capabilities Index: **147.4** (evals.report, official)
- Global-MMLU: **84.2%** (evals.report, unverified)
- Artificial Analysis Intelligence Index: no verified public figure captured

Coding:

- SWE-bench Verified: **80.2%** (MiniMax / evals.report / Benchgen)
- SWE-bench Pro: **55.4%** (evals.report); SWE-bench Multilingual **68.3%**; Multi-SWE-Bench **51.3%** (TokenMix)
- SciCode: **42.6%** (evals.report, unverified)
- Vibe Code Bench: **14.85%** (evals.report, verified)
- LiveCodeBench: no verified public score found (Benchgen notes M2's 83.0% only)

Other:

- Vectara Hallucination Rate: **9.1%** (evals.report, official) — low hallucination is a strength
- EQ-Bench Creative Writing v3: **1331 Elo** (evals.report)

Long context:

- No MRCR/RULER figure found; the ~192K–205K ceiling is noted as a structural limitation for repo-scale work.

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 76.3% and BFCL-v3 multi-turn 76.8% are top-tier agentic browsing/tool use, with GDPval 1176; capped by no Terminal-Bench/Claw-Eval coverage and PostTrainBench 9.50%.
- **Reasoning: 71/100.** GPQA Diamond 85.2% and a low 9.1% hallucination rate are solid, but HLE 19.4% and ECI 147.4 place it mid-tier.
- **Context window: 70/100.** ~192K–205K maps to the 200K = 70 anchor; a conflicting 1M claim is not the consensus and max output is only ~33K.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 81/100.** SWE-bench Verified 80.2%, Pro 55.4%, Multilingual 68.3% and SciCode 42.6% are strong for the price, but Vibe Code Bench 14.85% and no LiveCodeBench figure cap the ceiling.
- **Cost efficiency: 94/100.** ~$0.28–$0.30 / $1.10–$1.20 (cached ~$0.03–$0.06) is among the cheapest 80%+ SWE-bench options, and open weights allow self-hosting.
- **Overall Score: 64/100.** (82 + 71 + 70 + 15 + 81) / 5 = 63.8 → 64. Best fit: high-volume/low-cost agentic coding, browse-and-extract pipelines, and always-on inference under ~200K context.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (MiniMax release, Hugging Face, evals.report, Benchgen, TokenMix, DeepInfra, llm-stats, ModelsAtlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
