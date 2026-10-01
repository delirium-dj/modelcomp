# MiMo-V2.6-Pro — findings by Grok 4.6

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi’s September 2026 flagship omnimodal MoE (1.02T total / 42B active) for long-horizon coding and general agents. Open MIT checkpoint `XiaomiMiMo/MiMo-V2.6-Pro-RL`; API id `mimo-v2.6-pro`. Distinct from smaller sibling MiMo-V2.6-Flash.
- **Provider / access:** Xiaomi MiMo Open Platform `mimo-v2.6-pro` (also `mimo-v2.6-pro-ultraspeed` at 10× list). OpenCode Go Chat Completions `https://opencode.ai/zen/go/v1` id `mimo-v2.6-pro` (`opencode-go/mimo-v2.6-pro`). Also OpenRouter / Kilo `xiaomi/mimo-v2.6-pro`. No verified $0 OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-21/22 (HF + vendor news); models.dev knowledge tag 2026-09.
- **IDs:** `mimo-v2.6-pro`; HF `XiaomiMiMo/MiMo-V2.6-Pro-RL`; OpenCode Go `opencode-go/mimo-v2.6-pro`; OpenRouter `xiaomi/mimo-v2.6-pro`. No Free ID on Zen.
- **Context window:** 1,048,576 tokens total; max output 131,072 (models.dev, Pi OpenCode Go, vendor 1M native).
- **Modalities:** Native text / image / video / audio in, text out; reasoning on/off; tool calls; JSON/structured output on Xiaomi and OpenRouter. Some OpenCode Go listings expose text+image only — score native omni, note the thinner gateway surface.
- **Pricing (as of 2026-10-01):** Xiaomi list $0.435 / $0.87 per 1M in/out; cached input ~$0.0036; Batch API half price. UltraSpeed 10× ($4.35 / $8.70). Same as V2.5-Pro list. Paid (no Free ID).
- **Architecture:** Sparse MoE, 1.02T total / 42B activated, 384 routed / 8 active experts, 70 layers, 681M ViT + audio tokenizer/patch encoder, 5-layer MTP; MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi HF evaluation table; edges Claude Opus 5 89.1 and GPT-5.6 Sol 88.8)
- Terminal-Bench 4.0: **34.9%** vendor table; **34.8%** Artificial Analysis (Atlas) — far behind Opus 5 49.0
- Toolathlon-Verified: **76.9%** (HF table; Opus 5 80.6)
- AutomationBench v1.0.6: **53.1%** vendor; **58.6%** AutomationBench-AA 1.0.6 (Atlas)
- GDPval-AA 2.1: **1673** Elo (HF / Atlas; Opus 5 1708)
- OSWorld-Verified: **82.0%** (HF table)
- Agents’ Last Exam: **31.6%** (ties Opus 5 on vendor table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- JobBench: **62.0%** (HF table)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (text-only): **49.4%** (Easy Benchmarks / Atlas; AA Index constituent)
- LCR: AA-LCR v1.1 **86.3%** (Atlas)
- CritPt (avg@5): **26.6** (Atlas)
- Artificial Analysis Intelligence Index v4.3.2: **46** (AA model page; Easy Benchmarks 46.3, rank #32 / 703). Vendor: top open-weights on the Index, below Fable 5.1 / GPT-6 Astra
- AA-Omniscience Accuracy / Hallucination Rate: **34.9% / 40.6%**; Omniscience Index **8.4** (Atlas)
- AA-Briefcase v1.1 Elo: **1520–1522** (Atlas)
- GDP.pdf (AA all-pass / mean criteria): **19.2 / 68.1** (Atlas)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for this Pro checkpoint (SWE-Verified 61.1→66.2 in Xiaomi news is Distill-Qwen-9B RL, not Pro)
- DeepSWE v1.1: **71.9** (HF table). Release post cites RL lift to **72.6** — table 71.9 used as the published eval row
- SciCode 1.0.1 (Artificial Analysis): **60.9%** (Atlas / Easy Benchmarks, rank #6)
- LiveCodeBench: **no verified public score found** (BenchLM “coming soon”)
- Vibe Code Bench: **no verified public score found**
- ProgramBench: **26.5%** (HF table)
- MiMo Code Bench (in-house): **63.2%** (HF table; treat as vendor-internal)
- MiMo Visual Coding (in-house): **72.3%** (HF table)

Long context:

- Native **1M** tokens; AA-LCR v1.1 **86.3%** — not ≥98% retrieval at 512K+. No MRCR / RULER / GraphWalks number found for this ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 89.9% sits on the frontier ref (~88%+); Toolathlon 76.9, AutomationBench 53.1 (ahead of Opus 5 on the vendor row), and GDPval 1673 are near-frontier. Caps: TB4.0 34.9 vs ~49–59 closed, no Tau3/Claw-Eval.
- **Reasoning: 86/100.** HLE 49.4% clears the 40%+ frontier band; AA-LCR 86.3 is strong but below 95%+ MRCR-at-1M. Caps: Intelligence Index 46 vs 60+ frontier band, no GPQA Diamond, CritPt 26.6, Omniscience hallu 40.6%.
- **Context window: 96/100.** Documented 1,048,576 in / 131,072 out (≥1M tier 95–100). Not 100: AA-LCR 86.3 is not ≥98% retrieval at 512K+.
- **Multimodal: 92/100.** Native image + video + audio in (audio-in band 90–100) with text out. Caps: no verified non-text generation; some OpenCode Go listings only advertise text+image.
- **Coding: 90/100.** DeepSWE 71.9 near 74%+ frontier; SciCode 60.9 above 55%+; TB2.1 89.9. Caps: no public SWE-bench Verified/Pro or LiveCodeBench for this ID; ProgramBench 26.5; TB4.0 34.9.
- **Cost efficiency: 94/100.** Paid $0.435/$0.87 (cache ~$0.0036) — cheaper than the ~$0.60/$2.20 ≈92 anchor, well above $3/$15 ≈60; not $0 (100) and not ~$0.10/$0.20 (97–99). UltraSpeed 10× ignored for the evaluated standard tier.
- **Overall Score: 91/100.** Mean of 90, 86, 96, 92, 90 = 90.8 → 91 half-up. Best-fit: open-weights Pareto pick for omni agent/coding at ~$0.44/$0.87; escalate TB4.0-class terminal work and SWE-Verified-gated evals to closed frontier.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Xiaomi HF card, Xiaomi v2.6 news, Artificial Analysis, Benchmark Atlas, Easy Benchmarks, models.dev, Pi OpenCode Go); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
