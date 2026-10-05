# DeepSeek V3.2 — findings by Kimi K3

- Source: DeepSeek / DeepSeek-V3.2 (`deepseek-ai/DeepSeek-V3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (~671B/685B total, 37B active) with DeepSeek Sparse Attention for cheap long context; first DeepSeek model to integrate thinking into tool use (tool calls in both thinking and non-thinking modes). `V3.2-Speciale` is a separate elite-reasoning variant — not scored here.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v3.2` (no Zen Free ID); official DeepSeek API; weights on Hugging Face (`deepseek-ai/DeepSeek-V3.2`, MIT). Chat Completions API.
- **Release / knowledge:** Released 2025-12-01 (introl.com launch coverage, opper.ai); knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v3.2` on Zen; `deepseek-ai/DeepSeek-V3.2` on Hugging Face; `deepseek-v3-2` on benchlm / Artificial Analysis trackers.
- **Context window:** 128K per benchlm/Artificial Analysis trackers; repo meta lists 164,000 total with 8K–128K max output (provider-dependent).
- **Modalities:** Text in/out only (no vision/audio); hybrid thinking/non-thinking; tool calls; structured JSON output.
- **Pricing (as of 2026-10-05):** ~$0.28 / $0.42 per 1M (benchlm, cached $0.028); curated meta cites DeepSeek API ~$0.21/$0.31 (cached $0.022). Open weights = free self-host.
- **Architecture:** Proprietary-trained, open-weight sparse MoE, ~671B total / 37B active per token, DeepSeek Sparse Attention (opper.ai, deepseekai.guide).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **39.6%** (llmrun.dev aggregation, #33/57 all models)
- Tau2-Bench (τ²): **78.9%** (Artificial Analysis via benchlm.ai)
- Claw-Eval: **40.2%** (Claw-Eval leaderboard via benchlm.ai)
- VITA-Bench: **18.5%** (VitaBench leaderboard via benchlm.ai)
- Gert Labs: **29.57%** (gertlabs.com via benchlm.ai)
- GDPval-AA / Tau3: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (AA): **75.1%** (Artificial Analysis via benchlm.ai)
- HLE (AA): **11.2%** (Artificial Analysis via benchlm.ai)
- AA-LCR: **45.7%**; CritPt: **0.9%** (Artificial Analysis via benchlm.ai)
- Artificial Analysis Intelligence Index: **16.0** (partial coverage note; benchlm overall composite 50.94/100, rank #91/783)
- MMLU-Pro: **85.0%** (llmrun.dev)
- Omniscience Accuracy / Hallucination Rate: **24.0% / 93.3%** (AA — weak honesty profile)
- FrontierMath v2 (Tiers 1–3): **22.1%**; Tier 4: **2.1%** (Epoch AI via benchlm.ai)
- ARC-AGI: **57.0%**; ARC-AGI-2: **4.0%** (llmrun.dev, non-thinking runs)
- V3.2-Speciale variant (not this model): IMO 2025 gold-level 35/42, IOI 10th (492/600), ICPC World Finals 2nd (introl.com)

Coding:

- SWE-bench Verified: **70.0%** (llmrun.dev, #44/162)
- SWE-Rebench: **60.9%** (SWE-Rebench leaderboard via benchlm.ai)
- SWE-bench Bash Only: **60.0%**; SWE-bench Multilingual: **59.0%**; SWE-bench Lite: 30.7% (llmrun.dev)
- React Native Evals: **71.5%** (rn-evals via benchlm.ai)
- LMArena WebDev Elo: **1361.7** (llmrun.dev)

Long context:

- AA-LCR long-context retrieval: **45.7%** (Artificial Analysis via benchlm.ai); no RULER/GraphWalks number found.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Bench 78.9% is solid mid-upper, Claw-Eval 40.2% and Terminal-Bench 39.6% sit in the mid band; VITA 18.5% and missing GDPval cap it below the frontier reference.
- **Reasoning: 66/100.** GPQA 75.1% and MMLU-Pro 85% are mid-band (reference: GPQA 60–80% → 55–65+), but HLE 11.2%, CritPt 0.9%, ARC-AGI-2 4% and a 93.3% hallucination rate hold it down; Speciale's olympiad results belong to a different variant.
- **Context window: 62/100.** 100K–200K band (50–64): trackers list 128K (164K total per repo meta); LCR 45.7% is mediocre retrieval at length.
- **Multimodal: 15/100.** Text in/out only per all listings (benchlm, opper, meta).
- **Coding: 78/100.** SWE-bench Verified 70.0%, SWE-Rebench 60.9%, React Native 71.5% — strong mid-upper, below frontier refs (DeepSWE 74%+/TB2.1 85%+).
- **Cost efficiency: 97/100.** ~$0.28/$0.42 with $0.028 cached input is near the $0 = 100 reference; open weights allow free self-host.
- **Overall Score: 58/100.** Mean of (68 + 66 + 62 + 15 + 78) / 5 = 57.8 → 58. Best fit: cheap open-weight text coding/tool use where honesty can be supervised; skip for vision or frontier reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (benchlm.ai, llmrun.dev, Artificial Analysis, Epoch AI, introl.com, opper.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
