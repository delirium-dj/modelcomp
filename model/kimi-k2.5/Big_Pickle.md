# Moonshot AI Kimi K2.5 — findings by Big Pickle

- Source: Moonshot AI/Kimi K2.5 (`moonshotai/Kimi-K2.5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter native multimodal agentic MoE (1T total / 32B active) — continual pretraining on ~15T visual+text tokens atop Kimi-K2-Base, with instant/thinking modes and an "agent swarm" multi-agent execution scheme.
- **Provider / access:** Moonshot API (`moonshot-kimi-k2.5` style IDs), OpenCode Zen `opencode/kimi-k2.5`, self-host via Hugging Face / Docker Model Runner. OpenAI-compatible Chat Completions. (Zen serves `kimi-k2.5` as a paid record; free $0 rows on Zen are Alibaba plans, not this model.)
- **Release / knowledge:** 2026-01-26/27 (Vals AI tracked release; ApX lists 2026-02-05). Knowledge cutoff Oct 2025 (ApX).
- **IDs:** `moonshotai/Kimi-K2.5` (HF), `opencode/kimi-k2.5` (Zen). No Free ID (flagged `noFreeId` in `meta.json`).
- **Context window:** 262,144 total (256K native per GitHub/HF); 65,536–128K max output (Vals 128K; Zen 65,536). ApX's 512K figure is unverified against Moonshot's own docs — scored on 256–262K.
- **Modalities:** text, image, video in; text out; thinking (reasoning) mode; tool calls; JSON mode. Vision via 400M MoonViT encoder.
- **Pricing (as of 2026-10-07):** $0.60 in / $3.00 out per 1M (OpenCode Zen; Vals confirms Moonshot $0.60/$3.00), cached input $0.08. Paid only.
- **Architecture:** MoE, 1T total / 32B active (968B expert params, 384 experts, 8 selected + 1 shared), 61 layers, MLA attention, Modified MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (Moonshot tech report); Terminal-Bench 2.1: **41.95%** (Vals AI independent)
- τ³-bench: **65.7%** (BenchLM); τ²/BenchLM agentic lane: **36** (#58/111, estimated)
- Claw-Eval: **52.3%**; QwenClawBench: **54.3%** (BenchLM)
- BrowseComp: **74.9%** (**78.4%** with agent-swarm); 60.6% on another BenchLM harness (all recorded)
- Toolathlon: **27.8%** (BenchLM); DeepSearchQA: 77.1%; DeepPlanning: 14.4%
- GDPval / Toolathon (K2.6's 50.0 belongs to successor): no verified public score for K2.5 itself

Reasoning / knowledge:

- GPQA-Diamond: **87.6%** (Moonshot); **84.09%** (Vals independent)
- HLE-Full: **30.1%**; HLE w/ tools: **50.2%** (Moonshot)
- AIME 2025: **96.1%**; HMMT 2025: 95.4%; IMO-AnswerBench: 81.8%; MMLU-Pro: **87.1%** (Moonshot); 85.91% (Vals)
- Artificial Analysis Intelligence Index: **23** (ApX/AA); Agentic Index 0.22, Coding Index 0.47 (ApX)
- LongBench v2: **61%**; SuperGPQA: 69.2% (BenchLM)
- BenchLM overall: **52.94** (independent, 45 benchmarks covered)

Coding:

- SWE-bench Verified: **76.8%** (Moonshot); **70.0–70.8%** (Vals/BenchLM independent); 71% (ApX)
- SWE-bench Pro: **50.7%**; SWE-bench Multilingual: **73.0%**; SWE-Rebench: 58.5% (Moonshot/BenchLM)
- LiveCodeBench v6: **85.0%** (Moonshot); **83.87%** (Vals)
- SciCode: **48.7%** (Moonshot); **42.8-ish**? — 48.7 recorded, Vals 47.8 avg
- Vibe Code Bench v1.1: **17.54%** (Vals); PaperBench: 63.5%; CyberGym: 41.3%

Long context:

- LongBench v2 61% is the only length-bearing number; no MRCR/RULER retrieval scores published for K2.5.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 74.9% (78.4% swarm), τ³ 65.7% and Claw-Eval 52.3% are strong-mid; capped by Terminal-Bench 2.0 50.8% / 2.1 41.95% sitting in the mid band (45–60 → 50–70) and Toolathlon 27.8%/DeepPlanning 14.4% dragging the tail; no GDPval.
- **Reasoning: 80/100.** GPQA-Diamond 87.6%, HLE 30.1% (50.2% with tools) and AIME 96.1% are near-frontier; capped below 90 by AA Intelligence Index 23 (mid band 20–35) and HLE-without-tools 30.1 under the 40% frontier ref.
- **Context window: 74/100.** 256–262K lands in the 200K–500K tier (65–84) above the 200K = 70 reference; capped from higher by no MRCR/RULER retrieval numbers (LongBench v2 61% is partial evidence only) and ApX's unverified 512K claim not credited.
- **Multimodal: 86/100.** Native vision+video input with VideoMMMU 86.6%, Video-MME 87.4%, MMVU 80.4%, MMMU-Pro 78.5–84.3% — solidly in the 75–90 band's top half; capped from 90+ by text-only output and no audio input.
- **Coding: 86/100.** SWE-bench Verified 76.8% (70% independent), LiveCodeBench v6 85.0%, SWE-Multilingual 73% and SWE-Pro 50.7% are open-weight-SOTA class; capped by Terminal-Bench 2 ~50%, SciCode 48.7%, and Vibe 17.5%.
- **Cost efficiency: 90/100.** $0.60/$3.00 with $0.08 cached sits right at the ~$0.60/$2.20 ≈ 92 reference (output $0.80 higher); open weights mean self-host can approach $0; no free hosted tier.
- **Overall Score: 80.4/100.** (76+80+74+86+86)/5 = 80.4 — best-fit: best open-weight multimodal agent/coding model in this cohort; thinking mode + swarm design for long-horizon tasks at a fraction of proprietary frontier cost.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (Moonshot GitHub/HF tech report, Vals AI independent eval, BenchLM, ApX, Morphllm/industry write-ups, Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
