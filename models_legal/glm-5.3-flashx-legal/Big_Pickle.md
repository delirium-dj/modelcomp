# GLM-5.3-FlashX-Legal - findings by Big Pickle

- Source: Z.ai/GLM-5.3-FlashX-Legal
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal
- **Short description:** Legal-domain serving variant of Z.ai's GLM-5.3-FlashX — the low-latency, long-context tier of the GLM-5.3 family, tuned for contract review, compliance research and legal drafting. It shares the GLM-5.3 tokenizer and 1M-context serving stack; the `-legal` ID is a distinct endpoint, not a separate public benchmark entry.
- **Provider / access:** Z.AI Open Platform, model code `glm-5.3-flashx-legal` (Chat Completions API); also resold by third-party routers such as AgentSky (`zai/glm-5.3-flashx-legal`). No OpenCode Zen Free ID was verified.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not published.
- **IDs:** `zai/glm-5.3-flashx-legal` (vendor code `glm-5.3-flashx-legal`)
- **Context window:** 1,048,576 input tokens / 131,072 max output (Z.AI docs: "support for a 1M-token context window"; output limit from the GLM-5.3 family card).
- **Modalities:** Text, image and video in; text out. Streaming, function/tool calling and JSON output follow the GLM-5.3 API surface. Reasoning effort is switchable like the rest of the GLM-5.3 family.
- **Pricing (as of 2026-11-13):** $0.37 / 1M input, $0.075 / 1M cached input, $1.25 / 1M output (Z.AI list; AgentSky resale is higher at ~$0.43/$1.45).
- **Architecture:** Proprietary (closed weights); GLM-5.3-class sparse MoE serving stack, legal-domain post-training. Parameter counts are not disclosed.

### Raw benchmarks found

> Only one published, model-specific evaluation surfaced. Every other row is
> explicitly "no verified public score found"; no general-capability numbers are
> published for the `-legal` endpoint, so family-level proxies are marked
> provisional.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Great Commission Benchmark: **64.0 / 100** (Tier 1 63.8, Tier 2 60.0, Tier 3 73.3; llm-stats/GCB listing for this exact model ID) — domain knowledge/instruction benchmark, not a general reasoning score
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval curve is published for the 1M window; the 1M figure is a serving limit, not a measured retrieval result.

### Normalized scores (1-100)

- **Tool use: 72/100.** No agentic harness score exists for the `-legal` endpoint; this is a provisional family-tier estimate for GLM-5.3-FlashX tool calling, capped by the complete absence of Terminal-Bench/Tau3 evidence.
- **Reasoning: 70/100.** The only measured number is Great Commission Benchmark 64.0 (Tier 3 73.3), a domain benchmark; general GPQA/HLE are unpublished, which caps confidence in the low 70s.
- **Context window: 96/100.** Verified 1,048,576-token input window puts it in the 1M tier (95-100); no retrieval-at-length evidence keeps it below 100.
- **Multimodal: 80/100.** Text, image and video input with text output; no audio input, and no published visual benchmark score.
- **Coding: 68/100.** No SWE-bench, LiveCodeBench, SciCode or Terminal-Bench result for this variant; provisionally below the general FlashX tier because legal post-training trades away code-heavy behavior.
- **Cost efficiency: 94/100.** $0.37/$1.25 with $0.075 cached input sits between the ~$0.10/$0.20 (97-99) and ~$0.60/$2.20 (~92) reference points.
- **Overall Score: 77/100.** Half-up mean of (72 + 70 + 96 + 80 + 68) / 5 = 77.2. Best fit: high-volume legal document review where the 1M window and cached-input price matter more than frontier reasoning.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (vendor documentation, model-index aggregators, third-party benchmark listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI developer docs — GLM-5.3-Flash/FlashX (includes `glm-5.3-flashx-legal`)](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [llm-stats — GLM-5.3-FlashX-Legal benchmarks, pricing & context](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [AgentSky — GLM 5.3 FlashX Legal model page](https://agentsky.dev/models/zai/glm-5.3-flashx-legal)
- Future sources: add a new file next to this one, e.g. `GLM_5.3_FlashX_Legal.md`, using the same headings.
