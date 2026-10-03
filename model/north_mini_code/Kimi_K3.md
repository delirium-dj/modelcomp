# North Mini Code — findings by Kimi K3

- Source: Cohere / Cohere Labs (`north-mini-code`, weights `CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere's first agentic coding model and the debut of its open-weights North family — a 30B-total / 3B-active sparse MoE post-trained (2-stage SFT + async RLVR/CISPO) specifically for software-engineering and terminal tasks. Ranked strong for its size class on the Artificial Analysis Coding Index; text-only.
- **Provider / access:** Cohere API (Chat Completions / Messages-style), Hugging Face weights (BF16 + FP8, Apache 2.0), OpenRouter (`cohere/north-mini-code`, incl. a `:free` variant), Ollama library, and OpenCode at launch (per Cohere's HF blog). Checked the live Zen models endpoint `https://opencode.ai/zen/v1/models` on 2026-10-03: no `north-*` ID listed there today.
- **Release / knowledge:** Released 2026-06-09 (Cohere blog + HF announcement). Knowledge cutoff not disclosed.
- **IDs:** `cohere/north-mini-code` (Cohere API / OpenRouter; `:free` suffix on OpenRouter). State explicitly: **no Zen Free ID found** on the live endpoint as of 2026-10-03.
- **Context window:** 256,000 tokens total, 64,000 max output (OpenRouter listing; training used 64K/128K context stages and 128K global RL rollout window per the HF blog). No retrieval-at-length measurements published.
- **Modalities:** Text in, text out (text-only per Artificial Analysis). Tool calls and structured function-calling across harnesses (SWE-Agent, mini-SWE-agent, Terminus 2, OpenCode typed tools) are the core design target; reasoning traces via RLVR training. No image/audio/video.
- **Pricing (as of 2026-10-03):** $0 on OpenRouter `:free` (free-tier data-usage caveat applies — OpenRouter free variants may log/train on traffic). Cohere API is the paid path — no verified per-token rate found for it; weights are Apache 2.0, so self-hosting is the other $0-license path.
- **Architecture:** Decoder-only sparse MoE Transformer, 30B total / 3B active; 128 experts, 8 active per token; sigmoid router before top-k; interleaved sliding-window attention (RoPE) + global attention (NoPE) in a 3:1 ratio; SwiGLU FFN experts; one dense layer before sparse layers. Weights open under Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2 (vendor, Harbor ReAct harness): **55.1% pass@10** for the SFT checkpoint; RLVR final gains **+7.9% absolute pass@1** over SFT (final pass@1 not printed in text; Figure 5) (HF blog 2026-06-09)
- Terminal-Bench Hard: component of AA Coding Index (see Coding); standalone % not printed in text (harness: Terminus 2, per vendor methodology)
- Tau3-Banking / Tau2-Bench: τ²-Bench Telecom **37%** (Artificial Analysis, 2026-06-09)
- GDPval-AA: **14%** (Artificial Analysis, 2026-06-09); AA Agentic Index composite **21.7**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Harness-robustness note (vendor): **61.0% pass@1 on SWE-Bench Verified using mini-SWE-agent** (cross-harness transfer, "for free"), +10% on OpenCode harness after adding 6% harness-diverse data at SFT-2

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27.6** (2026-06-09) — above gpt-oss-20B (high) 24.5, just below Mistral Small 4 (119B-A6.5B) 27.8
- GPQA Diamond / HLE / CritPt: **no verified public score found** for this exact model
- LCR / MLCR / MRCR: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Verified (vendor, SWE-agent harness v1.1.0): **80.2% pass@10** (SFT); RLVR final **+3.0% absolute pass@1** over SFT (Figure 5 curve; final printed number not in text — ≈61%+3% pass@1 implied via the mini-SWE-agent line, treat ~64% pass@1 as approximate)
- SWE-Bench Pro: in vendor methodology suite; standalone % not printed in text (**no verified public score found** in text form)
- LiveCodeBench v6: in vendor methodology suite (3 seeds, temp 1.0, top_p 0.95); printed % in Figure 1 image only — **no verified public numeric score found**
- SciCode: component of AA Coding Index **33.4** (weighted avg of Terminal-Bench Hard + SciCode; AA, 2026-06-09) — above GLM-4.7-Flash 25.9, below Qwen3.6-35B-A3B 35.2; standalone SciCode % printed in Figure 1 image only
- Vibe Code Bench / DeepSWE / Coding Index other: **no verified public score found**
- Internal human eval (vendor, n=85, 5-pt Likert, OpenCode-harnessed): final RLVR model beats its SFT checkpoint with **66.1% aggregate win rate** (strongest on code editing)

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — **no long-context retrieval reported** (training reached 128K; no evaluation at 256K published)

Other verified datapoints:

- Throughput ~**199 output tokens/s** on Cohere API (Artificial Analysis pre-release speed testing)
- Agent-behavior (vendor RLVR note): shorter trajectories and fewer invalid/failing tool calls after RL; reliable submission termination

### Normalized scores (1–100)

> Overall per v4 (`RULES.md`): half-up mean of the five quality dims; Cost excluded.

- **Tool use: 55/100.** Purpose-built terminal/agent RLVR (TB v2 55.1% pass@10 SFT, +7.9 abs pass@1 after RL; τ²-Telecom 37%; verified tool-call discipline gains) lands mid-band, but GDPval-AA 14% / Agentic Index 21.7 show weak general-agentic performance outside coding — caps it far below the 90+ frontier (TB2.1 ~88).
- **Reasoning: 57/100.** AA Intelligence Index 27.6 puts it mid-band (20–35 → 55–65), above gpt-oss-20B-high but far below frontier 60+; no GPQA/HLE published, so the score leans on the Index alone (cap).
- **Context window: 72/100.** 256K listed window per the tier map (200–500K → 65–84, 200K = 70); no retrieval-at-depth measurement and 128K training budget keep it at the low end of the tier.
- **Multimodal: 15/100.** Text-only input and output (Artificial Analysis); floor per methodology.
- **Coding: 64/100.** Best-in-size-class verified coding: SWE-Bench Verified ~61–64% pass@1 (vendor, mini-SWE-agent/SWE-agent-harness) and 80.2% pass@10, AA Coding Index 33.4 in a small-model field, plus a 66.1% human-eval win rate after RLVR — but no published DeepSWE/Coding Index ≥70 and no LiveCodeBench/SciCode prints, capping it in the 60s.
- **Cost efficiency: 100/100.** Evaluated tier is $0 (OpenRouter `cohere/north-mini-code:free`; Apache-2.0 weights are additionally free to self-host) — 100 per the $0 rule, with the standard free-tier data-logging caveat.
- **Overall Score: 53/100.** (55 + 57 + 72 + 15 + 64) / 5 = 52.6 → 53. Best fit: free, fast (~199 tok/s) local/OpenRouter coding agent for SWE/terminal tasks; not a general-reasoning or multimodal pick.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-03
- Method: public internet research (Hugging Face CohereLabs blog `introducing-north-mini-code` 2026-06-09, artificialanalysis.ai North Mini Code article 2026-06-09, docs.cohere.com North Mini Code, openrouter.ai `cohere/north-mini-code:free`, ollama.com library, live check of `https://opencode.ai/zen/v1/models` 2026-10-03); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
