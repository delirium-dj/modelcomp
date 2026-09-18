# GLM 5.3 Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / GLM 5.3 Free (`opencode/glm-5.3-free` — free alias of GLM-5.3-Flash, Z.ai)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (OpenCode Zen free tier; underlying weights = Z.ai GLM-5.3-Flash)
- **Short description:** OpenCode Zen's free-tier alias serving Z.ai's GLM-5.3-Flash weights. The paid model is a fast, open-weight, natively multimodal sibling of the flagship GLM-5.3, priced at roughly a tenth of the full model and famous for its six-day stealth run under the codename "Ox Alpha". Free access is the only difference from the `model/glm-5.3-flash/` entry — same weights, same benchmark profile.
- **Provider / access:** OpenCode Zen — OpenAI-compatible endpoint. The models.dev record for `zhipuai/glm-5.3-flash` lists a $0.00/$0.00 price, and Zen's free aliases follow the `opencode/` + model-name + `-free` naming pattern, so this ID is the free path to the same weights. Paid fallbacks exist on Z.ai's own API, OpenRouter, Cloudflare Workers AI and Vercel AI Gateway.
- **Release / knowledge:** Underlying model confirmed 2026-08-26. Knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-free` (Zen free tier); `glm-5.3-flash` for the paid model. MIT-licensed weights at `zai-org/GLM-5.3-Flash`.
- **Context window:** 1,048,576 tokens for the model family (max output 48,000 on hosted endpoints; the models.dev record lists 1,000,000 / 131,072 for the paid route). The free tier's own caps are not separately documented by Zen, so treat the free window as family-level rather than guaranteed.
- **Modalities:** text, image, video and PDF input with tool calls; text + tool-call output — the first natively multimodal GLM-5 model.
- **Pricing (as of 2026-09-18):** **Free** through the Zen alias. Full price elsewhere is $0.15 / 1M in and $0.50 / 1M out with $0.03 cached (Wafer undercuts to $0.10/$0.35). Unlike Big Pickle, MiMo-V2.5 Free and Ling 3.0 Flash Fin Free, Zen's published privacy page does **not** list GLM-5.3 among the models whose free-period prompts may be used for training — that is my reading of the policy page, not a contractual guarantee.
- **Architecture:** Mixture-of-Experts transformer, 320B total parameters with 18B active, 45 layers mixing KDA linear attention with NoPE sparse MLA attention, 8-of-288 expert routing; MIT license.

### Raw benchmarks found

> Same weights as the paid GLM-5.3-Flash; the vendor-reported and third-party numbers
> below carry over unchanged.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor) — within a point of Claude Opus 4.8's 85.0 and close to GPT-5.6 Terra's 87.4%
- AutomationBench: **48.8%** (nearly double GLM-5.2's 26.2%); Toolathon: **78.4%**
- Agents Last Exam: **26.3%**; GDPval-AA v2 Elo: **1773**
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI via Model Beat; a price-tracker listing for the free Flash endpoint shows 91.2%)
- HLE with tools: **55.3%** (vendor); HLE (Epoch): **39.9%**
- SimpleQA Verified: **32.0%**; AIME 2024/2025: **93.9%**
- Artificial Analysis Intelligence Index: **57** — third of 109 tracked models at launch
- LCR / MLCR / CritPt / omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **63.4%**; SciCode: **51.6%**; WebDev Arena: **1604 Elo**; NL2Repo: **56.3%**; Z.ai Code Bench v1.0: **29.0** vs Opus 4.8's 29.5
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Output speed on the paid route: **49 tok/s** median (Artificial Analysis, rank 31 of 36) — the free route's throughput is not separately measured

Multimodal / other vendor evals: Mvbench **77.8**, Chartography **78**, OfficeQA Pro **62.4**, CharXiv reasoning **89.4**, BabyVision **53.4**

Long context:

- no long-context recall score published for the family; the ~1M window is vendor-claimed with no independent retrieval evidence.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 84.3%, AutomationBench 48.8%, Toolathon 78.4% and a GDPval-AA Elo of 1773 are near-proprietary agent results at zero cost; capped by missing Tau3/Claw evidence.
- **Reasoning: 86/100.** GPQA Diamond 90.2–91.2% and HLE-with-tools 55.3% are strong; HLE 39.9% without tools and SimpleQA 32.0% mark the knowledge limit.
- **Context window: 95/100.** A ~1M-token multimodal-capable window with 4.4× KV-cache compression free of charge; the free tier's own cap is undocumented and no recall benchmark exists.
- **Multimodal: 88/100.** Native image, video and PDF input with CharXiv 89.4% and Mvbench 77.8%; text-only output.
- **Coding: 86/100.** DeepSWE 63.4%, SciCode 51.6%, WebDev Arena 1604 and near-Opus Z.ai Code Bench results; missing SWE-bench Verified/Pro values cap it.
- **Cost efficiency: 100/100.** $0 through the Zen alias, with a policy page that does not flag GLM-5.3 for training-on-free-prompts (unlike the other free aliases in this scan).
- **Overall Score: 91/100.** (88 + 86 + 95 + 88 + 86 + 100) / 6 = 90.5 → **91**. Best fit: cost-free multimodal agent loops for coding and document work where GLM's ~49 tok/s output speed is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Z.ai model page via HokAI, Epoch AI figures via Model Beat, models.dev/OpenCode Zen records, Zen privacy policy); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.