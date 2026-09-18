# Ling 3.0 Flash Fin Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Ling 3.0 Flash Fin Free (`opencode/ling-3.0-flash-fin-free`, InclusionAI)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (finance-tuned variant of Ling 3.0 Flash; the Zen free tier is the wrapper most users meet)
- **Short description:** A finance-focused Mixture-of-Experts model from InclusionAI (Ant Group), built on Ling 3.0 Flash with 5.1B active parameters out of 124B total. It targets financial document reasoning, knowledge work and agentic querying rather than frontier general reasoning, and is distributed free through OpenCode Zen.
- **Provider / access:** OpenCode Zen (free alias) plus OpenRouter and other hosts for the paid model. Served over an OpenAI-compatible chat-completions endpoint; the models.dev record lists `inclusionai/ling-3.0-flash-fin` at 262,144 context / 32,768 output with a $0.00/$0.00 price, consistent with the Zen free tier.
- **Release / knowledge:** Released 2026-08-27.
- **IDs:** `opencode/ling-3.0-flash-fin-free` (Zen); paid model id `inclusionai/ling-3.0-flash-fin`. A separate `Ling 3.0 Flash VL` (vision-language) variant shipped 2026-09-12 — a different model.
- **Context window:** 262,144 tokens with a 32,768-token max output (tracker-verified). Roughly a quarter of the 1M-token windows now common in this price band.
- **Modalities:** text in / text out only. No image, audio, video or PDF input; tool calls and reasoning are supported, structured/JSON mode is not reported.
- **Pricing (as of 2026-09-18):** **Free** through OpenCode Zen. Paid routes are cheap: representative listing $0.06 / 1M in and $0.18 / 1M out, with a cheapest observed route at $0.021 / $0.063 and $0.0042 cached input. Zen's privacy page explicitly warns that prompts sent to Ling 3.0 Flash Fin Free during the free period may be used to improve the model — the direct cost of the $0 price.
- **Architecture:** open-weight Mixture-of-Experts (124B total / 5.1B active, per the vendor's description of the Ling 3.0 Flash base). License terms for the Fin variant were not confirmed in the sources checked.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Terminal-Bench 2.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- HLE: **22.6%** (Artificial Analysis via Model Beat)
- GPQA Diamond: **85.5%** (price-tracker listing for the Ling 3.0 Flash family endpoint) — flagged as family-level, not variant-verified
- MMLU-Pro / SimpleQA / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: tracker places it at the **38th percentile** of tracked models (and 38th on its Coding Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- LCR / MLCR: **no verified public score found**

Coding:

- SciCode: **42.4%** (Artificial Analysis via Model Beat)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published; the 262K window has no retrieval evidence behind it in the sources checked.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling is supported and the model is marketed for agentic financial querying, but not a single Terminal-Bench, Tau3, GDPval or Claw result exists, so the score sits just above midpoint on capability signals alone.
- **Reasoning: 62/100.** HLE 22.6% and a 38th-percentile Intelligence Index are modest; GPQA Diamond 85.5% (family-level) is the one bright spot, and no MMLU-Pro/SimpleQA value corroborates it.
- **Context window: 75/100.** 262,144 tokens with a 32,768-token output cap is mid-tier and a quarter of the 1M windows now common at this price; no recall evidence.
- **Multimodal: 15/100.** Text-in/text-out only, with no image, audio, video or PDF path.
- **Coding: 62/100.** SciCode 42.4% and a 38th-percentile coding index are serviceable for scripting and finance tooling but far from agentic-coding territory.
- **Cost efficiency: 100/100.** Free on Zen, with paid routes as low as $0.021/$0.063 per 1M if the free tier's data-training caveat is unacceptable.
- **Overall Score: 62/100.** (55 + 62 + 75 + 15 + 62 + 100) / 6 = 61.5 → **62**. Best fit: free, high-volume finance and text-processing pipelines where a 262K window is enough and free-period data usage is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Artificial Analysis figures via Model Beat, models.dev/OpenCode Zen records, OpenCode Zen privacy page, price-tracker listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.