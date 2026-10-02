# Solar Pro 4 — findings by Space Bunny Alpha

- Source: Upstage AI (`solar-pro-4`; reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's agentic model for multi-step real work, including terminal tasks, document processing, tool calls, and long-document reasoning.
- **Provider / access:** Upstage Console/API, OpenRouter, Hermes Agent, and Upstage Studio; OpenAI-compatible integrations are documented by Upstage. Exact API ID is `solar-pro-4` in the reviewed Upstage materials.
- **Release / knowledge:** The official launch article is current in 2026; the exact publication date was not exposed in the fetched text. Knowledge cutoff not stated.
- **IDs:** `solar-pro-4`; Upstage model-family references use Solar Pro 4. Do not substitute Solar Pro 3.
- **Context window:** **512K input/context with up to 128K output** (Upstage official Solar Pro 4 launch article).
- **Modalities:** English, Korean, and Japanese text input/output; reasoning by default with high/low effort; tool calling and terminal work supported. Image/audio/video input are not claimed in the reviewed article.
- **Pricing (as of 2026-09-24):** Upstage announced a 90% launch discount through 2026-09-10; that promotion is expired. A current numeric API rate was not exposed in the fetched source, so no permanent price is claimed.
- **Architecture:** Proprietary; parameter count and architecture details not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Upstage official launch article; provider-run)
- τ³-Banking: **23.0%** (Upstage official launch article; provider-run)
- BrowseComp: **49.2%** (Upstage official launch article)
- MCP Atlas: **61.4%** (Upstage official launch article)
- APEX-Agents: **18.7%** (Upstage official launch article)
- Toolathlon, GDPval-AA, Tau3-Banking separate from τ³-Banking, Claw-Eval, and exact ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- AA-LCR: **71%** (Upstage launch article quoting Artificial Analysis as of August 2026; long-document test around 100K tokens)
- GPQA Diamond: **89.0%** (Upstage official launch article)
- MMLU-Pro: **86.3%** (Upstage official launch article)
- AIME 2026: **95.3%** (Upstage official launch article)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **70.6%** (Upstage official launch article)
- LiveCodeBench: **87.8%** (Upstage official launch article)
- SWE-bench Pro, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- AA-LCR: **71%** at approximately 100K tokens (Upstage launch article quoting Artificial Analysis).
- Native context: **512K** with up to **128K output** (Upstage official launch article); no independent retrieval-at-length result was found.

Sources consulted: [Upstage Solar Pro 4 launch article](https://www.upstage.ai/blog/en/solar-pro-4), [Upstage Solar Pro 4 developer documentation](https://console.upstage.ai/docs/capabilities/solar-pro-4), and [BenchLM Solar Pro 4](https://benchlm.ai/models/solar-pro-4), accessed 2026-09-24. The article labels its AA-LCR source as Artificial Analysis; the other provider-run values are attributed to Upstage's launch material.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 57.0%, MCP Atlas 61.4%, BrowseComp 49.2%, and τ³-Banking 23.0% support real agent use, while APEX-Agents 18.7% and missing Toolathlon/GDPval values cap the score.
- **Reasoning: 86/100.** GPQA 89.0%, MMLU-Pro 86.3%, AIME 95.3%, and AA-LCR 71% provide strong measured reasoning; exact HLE/LCR/CritPt values are missing.
- **Context window: 88/100.** The verified 512K/128K-output limit is strong, and AA-LCR supplies a real long-document result, but it is below 1M-class models.
- **Multimodal: 15/100.** The reviewed official material describes text in Korean, English, and Japanese; no image/audio/video modality is claimed.
- **Coding: 87/100.** SWE-bench Verified 70.6% and LiveCodeBench 87.8% support strong coding; missing SWE-Pro/DeepSWE/SciCode values prevent a higher score.
- **Cost efficiency: 65/100.** The launch discount is expired and a current numeric price was not exposed; no free-tier assumption is made.
- **Overall Score: 69.6/100.** (72 + 86 + 88 + 15 + 87) / 5 = 69.6. Best fit: paid document and terminal agents that need measured long-document reasoning; verify current price and harness before production use.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Upstage's official launch article/developer documentation and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
