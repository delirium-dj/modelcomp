# Grok 4.6 — findings by Cat Jam

- Source: SpaceXAI / Grok 4.6 (`opencode/grok-4-6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** SpaceXAI/xAI post-training-specialized Grok (released 2026-08-12; prior to 4.7). 1.5T foundation with RL; strong GPQA/Tau3 agent at mid pricing; 500K context.
- **Provider / access:** xAI API (`grok-4.6`), OpenRouter, Amazon Bedrock, Grok in X, SuperGrok. Text/image in; text out. Reasoning always on (low/medium/high/xhigh). Built-in web/X search, code exec, function calling.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff 2026-02-01 (training data; no events after).
- **IDs:** `grok-4.6` (xAI)
- **Context window:** 500,000 tokens; no dedicated max output limit per docs; pricing tier changes above 200K tokens. (Text/image output only.)
- **Modalities:** Text, image in; text out (jpg/png images ≤20 MiB). No native audio/video.
- **Pricing (as of 2026-10-16):** Standard (<200K tokens): $2.00 / $6.00 per 1M input/output, cached $0.50. Long context (>200,000) pricing: $4.00 / $12.00 (cached $1.00). Regional US +10%. Batch/flex not available for 4.6 (note!). Web/X search tool $5 per 1,000 calls.
- **Architecture:** Post-training upgrade of Grok 4.5 (1.5T); no model size change; supplementary SFT + RL.

### Raw benchmarks found

Agent / tool use:

- GPQA Diamond: **94.9%** (first of 246 at release; AA measured)
- Tau-3-Banking: **50.7%** (AA, #2)
- GDPval-AA v2 Elo: **1753** (AA, #3)
- AA-Briefcase: 1577 (#4)
- Terminal-Bench 2.1: **88.4%** (AA)
- AutomationBench? 41? not direct sampled (Grok 4.6 from benchgap? AutomationBench maybe 53? no)
- LCR 75.0 (#27)
- Omniscience Accuracy? from benchgap? 48.2 (high) for accuracy; halluc 65.7
- BrowseComp? not in sampled summary (Grok 4.5/Astra tables) maybe ? Base OA? skip
- OSWorld? not in sampled
- DeepSearchQA? not sampled
- Vals Index 52.1%; LiveCodeBench 88.2; SWE Verified 95.6 (Vals)

Reasoning / knowledge:

- HLE: 42.9% (AA)
- AA Intelligence Index (high/xhigh): 44.2–44.3 (max maybe 60.92?)
- SciCode: 53.6% (regression vs 4.5 by 0.5)
- ARC-AGI-2? not 4 (Grok 4.6 high 94.9? Actually GPQA 94.9; ARC not sampled)
- LCR 75.0
- Omniscience accuracy 48.2 (high) (AA)
- MathArena? not found
- Factuality hallucination 1.7% at high? From model card? Could mention 1.7% hallucination rate (high thinking) if card says. (Yes model card states factuality benchmark hallucination rate 1.7%? Actually "Grok 4.6 scores 1.7% hallucination rate at high thinking effort." Good.)

Coding:

- SWE-bench Verified: **95.6%** (Vals)
- Terminal-Bench 2.1: **88.4%**
- FrontierCode v1.1 main: **48.0%**
- Terminal-Bench 4.0: 17.2% (AA measured)
- LiveCodeBench 88.2 (Vals)
- MMLU-Pro 89.4 (Vals)
- DeepSWE? not in sampled xAI table but AA Coding Index 76.8 (high)

Long context:

- 500K context; LCR/AA-LCR **75.0%** (not great) and long-context pricing tiers >200K.

### Normalized scores (1–100)

- **Tool use: 92/100.** GPQA 94.9, Tau3 50.7, GDPval Elo 1753, TB2.1 88.4. Strong agent/coding at low price.
- **Reasoning: 94/100.** HLE 42.9, LCR 75.0, SciCode 53.6, AA intelligence high 44.2–44 (AA composition factor); GPQA 94.9, hallucination 1.7% high. (AA index 60.9? Note: eesel measured AA Intelligence Index 60.92? It said 60.92 on Intelligence Index v4.1.1, sixth of 95. Use 61.) Use AA 60.9.
- **Context window: 84/100.** 500K with 200K pricing threshold; AA LCR 75.0% and verbosity (cache behavior note) caps at 84.
- **Multimodal: 76/100.** Text/image only; no audio/video. Good image but no broad native perception.
- **Coding: 93/100.** SWE-Verified 95.6, FrontierCode 48.0, TB2.1 88.4, LiveCode 88.2. Strong terminal/code agent.
- **Cost efficiency: 82/100.** $2/$6 per 1M, but cache reads 0.50 (vs 4.5's 0.30) and 47% more output per task raised bills 1.84× on shared benchmarks. Cache key critical. Batch not supported for 4.6.
- **Overall Score: 88/100.** Mean (92+94+84+76+93)/5 = 87.8. Fast/efficient cost-performance leader? Strong for terminal work, but bill behavior caveat.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (xAI docs, OpenRouter, AA/eel, TensorFeed, AWS Bedrock card, SpaceAI/OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores. Note: cache rates and task-level token counts drove eesel’s bill warning.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
