# Kimi K2.8 Preview — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.8 Preview (`kimi-for-coding`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via Moonshot's Kimi Code rollout).

## Model card

- **Name:** Kimi K2.8 Preview (served at the existing `kimi-for-coding` model ID; no free Zen ID)
- **Short description:** Moonshot AI's mid-tier coding and agentic model, rolled out inside the Kimi Code product on 2026-09-11 at the same model ID that previously answered for Kimi K2.7 Code — so existing clients received the upgrade with no configuration change. It sits between K2.7 Code (June 2026, 256K context) and the flagship Kimi K3 (July 2026, 2.8T parameters), and Moonshot's only performance claim is qualitative: overall capability close to K3 with more efficient reasoning.
- **Provider / access:** **Only inside Moonshot's own products** (Kimi Code and Kimi Work) at the `kimi-for-coding` model ID. It is not on Moonshot's general developer API or pricing page, and unlike K2.6/K2.7 Code there is no Hugging Face repository or public license.
- **Release / knowledge:** 2026-09-11. No model card, knowledge cutoff, system card or data-retention policy published.
- **IDs:** `kimi-for-coding` (product route). No separate public API id; no OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens — Kimi Code's full window is now open to **every** membership tier, a limit Moonshot previously reserved for higher plans.
- **Modalities:** text and image input with text, tool-call and code output. One tracker claims video input without a Moonshot source; audio input is unconfirmed.
- **Pricing (as of 2026-09-18):** **not billed per token** — it rides on whichever Kimi membership plan the account already holds, with no separate line item on Moonshot's pricing page. Exact tier prices were not independently verifiable.
- **Architecture:** undisclosed for this checkpoint. Because it answers at the same endpoint as K2.7 Code with "no configuration change required," it most likely shares that model's MoE transformer design (1T total / 32B active per token), but that is an inference from the shared route, not a confirmed K2.8 spec. Reasoning effort is exposed as three levels — low, high, max (max default), controlled per request with `--effort` — narrower than K3's six-level scheme.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 2.0: **no independently verified public score found**
- Tau3-Banking / Tau2-Bench: **no independently verified public score found**
- GDPval-AA: **no independently verified public score found**
- Claw-Eval / ClawProBench: **no independently verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no independently verified public score found**
- Vendor claim only: overall capability "close to K3", with more efficient reasoning.

Reasoning / knowledge:

- GPQA Diamond: **no independently verified public score found** for K2.8. Reference point: flagship **Kimi K3** reported **93.5%** at its July 2026 release — that figure belongs to K3 and must not be assumed to carry over.
- HLE / CritPt / LCR / MLCR / MMLU-Pro: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no entry found** for this checkpoint
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no independently verified public score found**
- Reference point: **Kimi K3** reported **67.5%** on DeepSWE at release, ahead of GPT-5 and open peers such as DeepSeek V4 and GLM-5.2 on several evals — again K3's number, not K2.8's
- The one confirmed capability change is context: a 1M-token window on every membership tier.

Long context:

- no MRCR/RULER/GraphWalks recall value published for K2.8 Preview; the 1M window is a product-tier change with no retrieval evidence behind it.

### Normalized scores (1–100)

- **Tool use: 75/100.** It is positioned as an agentic coding model with a 1M window and three effort levels inside Kimi Code, but not one published Terminal-Bench, Tau3, GDPval or Claw result verifies capability, which caps the score hard.
- **Reasoning: 70/100.** No GPQA, HLE or composite index exists for this checkpoint; the mark reflects a mid-tier slot in Moonshot's lineup plus the vendor's efficiency claim, not measurement.
- **Context window: 95/100.** A 1,048,576-token window opened to every Kimi Code membership tier is a genuine, confirmed upgrade; no recall-at-depth benchmark keeps it below the maximum.
- **Multimodal: 60/100.** Text and image input with text/code output, following K3's verified capability set; the video-input claim from one tracker has no Moonshot source and is not counted.
- **Coding: 78/100.** The model exists to serve Kimi Code and Moonshot positions it near K3 (which reported 67.5% DeepSWE), but no K2.8-specific coding benchmark, parameter count or architecture is published.
- **Cost efficiency: 90/100.** No per-token charge — it is bundled into an existing Kimi membership, which is excellent for subscribers and worthless to teams needing a standalone API.
- **Overall Score: 78/100.** (75 + 70 + 95 + 60 + 78 + 90) / 6 = 78.0 → **78**. Best fit: existing Kimi Code subscribers who want more efficient coding help without a K3-tier plan; avoid it if you need a benchmarked, documented or per-token-billed model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Moonshot/Kimi Code changelog coverage as compiled by HokAI, K3 release reference figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.